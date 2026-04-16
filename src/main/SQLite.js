import Database from 'better-sqlite3'
import path from 'path'
import { app } from 'electron'

const dbPath = path.join(app.getPath('userData'), 'inventory.db')
const db = new Database(dbPath)

db.pragma('journal_mode = WAL')

// =========================
// 🧾 PRODUCTS TABLE
// =========================

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    expDate TEXT,
    category TEXT,
    stock INTEGER,
    boxPrice REAL DEFAULT 0,
    itemsPerBox INTEGER DEFAULT 1,
    price REAL DEFAULT 0
  )
`
).run()

// =========================
// 🔧 MIGRATION (VERY IMPORTANT)
// =========================

// Add missing columns safely (runs only once)
try {
  db.prepare(`ALTER TABLE products ADD COLUMN boxPrice REAL DEFAULT 0`).run()
} catch (e) {}

try {
  db.prepare(`ALTER TABLE products ADD COLUMN itemsPerBox INTEGER DEFAULT 1`).run()
} catch (e) {}

try {
  db.prepare(`ALTER TABLE products ADD COLUMN price REAL DEFAULT 0`).run()
} catch (e) {}

// =========================
// 🧾 SALES TABLE
// =========================

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY,
    customerName TEXT,
    total REAL,
    date TEXT
  )
`
).run()

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS sale_items (
    id INTEGER PRIMARY KEY,
    saleId INTEGER,
    productId INTEGER,
    quantity INTEGER,
    price REAL
  )
`
).run()

export default db
