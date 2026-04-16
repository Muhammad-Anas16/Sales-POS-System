import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import db from './SQLite'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  // =========================
  // 🧾 PRODUCTS CRUD
  // =========================

  ipcMain.handle('get-products', () => {
    return db.prepare('SELECT * FROM products').all()
  })

  ipcMain.handle('add-product', (_, product) => {
    const price = product.boxPrice / product.itemsPerBox

    return db
      .prepare(
        `
        INSERT INTO products 
        (name, expDate, category, stock, boxPrice, itemsPerBox, price)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `
      )
      .run(
        product.name,
        product.expDate,
        product.category,
        product.stock,
        product.boxPrice,
        product.itemsPerBox,
        price
      )
  })

  ipcMain.handle('update-product', (_, product) => {
    const price = product.boxPrice / product.itemsPerBox

    return db
      .prepare(
        `
        UPDATE products
        SET name = ?, expDate = ?, category = ?, stock = ?, 
            boxPrice = ?, itemsPerBox = ?, price = ?
        WHERE id = ?
      `
      )
      .run(
        product.name,
        product.expDate,
        product.category,
        product.stock,
        product.boxPrice,
        product.itemsPerBox,
        price,
        product.id
      )
  })

  ipcMain.handle('delete-product', (_, id) => {
    return db.prepare(`DELETE FROM products WHERE id = ?`).run(id)
  })

  // =========================
  // 🔍 SEARCH PRODUCTS
  // =========================

  ipcMain.handle('search-products', (_, query) => {
    return db.prepare(`SELECT * FROM products WHERE name LIKE ?`).all(`%${query}%`)
  })

  // =========================
  // 🧾 CREATE SALE (ADVANCED POS)
  // =========================

  ipcMain.handle('create-sale', (_, { customerName, items }) => {
    const transaction = db.transaction(() => {
      let total = 0

      items.forEach((item) => {
        const product = db.prepare('SELECT * FROM products WHERE id = ?').get(item.productId)

        if (!product) {
          throw new Error('Product not found')
        }

        const itemsPerBox = product.itemsPerBox || 1

        // 🔥 Convert everything to ITEMS
        const soldItems = item.type === 'box' ? item.quantity * itemsPerBox : item.quantity

        const totalItems = product.stock * itemsPerBox

        if (soldItems > totalItems) {
          throw new Error(`Not enough stock for ${product.name}`)
        }

        // 💰 Calculate using per item price
        total += product.price * soldItems

        // 🔻 Remaining items
        const remainingItems = totalItems - soldItems

        // 🔁 Convert back to boxes
        const newBoxes = Math.floor(remainingItems / itemsPerBox)

        db.prepare(`UPDATE products SET stock = ? WHERE id = ?`).run(newBoxes, item.productId)
      })

      // 🧾 Insert sale
      const saleResult = db
        .prepare(
          `
          INSERT INTO sales (customerName, total, date)
          VALUES (?, ?, datetime('now'))
        `
        )
        .run(customerName, total)

      const saleId = saleResult.lastInsertRowid

      // 📦 Insert sale items
      items.forEach((item) => {
        db.prepare(
          `
          INSERT INTO sale_items (saleId, productId, quantity, price)
          VALUES (?, ?, ?, ?)
        `
        ).run(saleId, item.productId, item.quantity, item.price)
      })

      return { saleId, total }
    })

    return transaction()
  })

  // =========================
  // 🧾 Sales Report
  // =========================

  ipcMain.handle('get-sales-report', () => {
    return db
      .prepare(
        `
    SELECT 
      date,
      SUM(total) as total
    FROM sales
    GROUP BY date
    ORDER BY date DESC
    LIMIT 7
  `
      )
      .all()
  })

  // =========================
  // 🧾 FULL SALES HISTORY (DETAILED)
  // =========================

  ipcMain.handle('get-full-sales', () => {
    const rows = db
      .prepare(
        `
    SELECT 
      s.id as saleId,
      s.customerName,
      s.total,
      s.date,
      si.id as itemId,
      si.quantity,
      si.price,
      p.name as productName
    FROM sales s
    JOIN sale_items si ON s.id = si.saleId
    JOIN products p ON p.id = si.productId
    ORDER BY s.date DESC
  `
      )
      .all()

    // 🔥 GROUP BY saleId
    const result = {}

    rows.forEach((row) => {
      if (!result[row.saleId]) {
        result[row.saleId] = {
          id: row.saleId,
          customerName: row.customerName || 'Walk-in Customer',
          total: row.total,
          date: row.date,
          items: []
        }
      }

      result[row.saleId].items.push({
        id: row.itemId,
        name: row.productName,
        quantity: row.quantity,
        price: row.price
      })
    })

    return Object.values(result)
  })

  // =========================

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
