// // import { contextBridge, ipcRenderer } from 'electron'
// // import { electronAPI } from '@electron-toolkit/preload'

// // // Custom APIs for renderer
// // const api = {
// //   // Update Products
// //   updateProduct: (product) => ipcRenderer.invoke('update-product', product),

// //   // Delete Products
// //   deleteProduct: (id) => ipcRenderer.invoke('delete-product', id),

// //   // 📦 Get Products
// //   getProducts: () => ipcRenderer.invoke('get-products'),

// //   // ➕ Add Products
// //   addProduct: (product) => ipcRenderer.invoke('add-product', product)
// // }

// // // Use `contextBridge` APIs to expose Electron APIs to
// // // renderer only if context isolation is enabled, otherwise
// // // just add to the DOM global.
// // if (process.contextIsolated) {
// //   try {
// //     contextBridge.exposeInMainWorld('electron', electronAPI)
// //     contextBridge.exposeInMainWorld('api', api)
// //   } catch (error) {
// //     console.error(error)
// //   }
// // } else {
// //   window.electron = electronAPI
// //   window.api = api
// // }

// import { contextBridge, ipcRenderer } from 'electron'
// import { electronAPI } from '@electron-toolkit/preload'

// // Custom APIs for renderer
// const api = {
//   // =========================
//   // 🧾 PRODUCTS CRUD
//   // =========================

//   // 📦 Get Products
//   getProducts: () => ipcRenderer.invoke('get-products'),

//   // ➕ Add Product
//   addProduct: (product) => ipcRenderer.invoke('add-product', product),

//   // ✏️ Update Product
//   updateProduct: (product) => ipcRenderer.invoke('update-product', product),

//   // ❌ Delete Product
//   deleteProduct: (id) => ipcRenderer.invoke('delete-product', id),

//   // =========================
//   // 🔍 SEARCH PRODUCTS
//   // =========================

//   searchProducts: (query) => ipcRenderer.invoke('search-products', query),

//   // =========================
//   // 🧾 BILLING / SALES
//   // =========================

//   createSale: (data) => ipcRenderer.invoke('create-sale', data)
// }

// // Expose APIs safely to renderer
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)
//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   window.electron = electronAPI
//   window.api = api
// }

import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// =========================
// 🧠 CUSTOM API WRAPPER
// =========================
const api = {
  // =========================
  // 🧾 PRODUCTS CRUD
  // =========================

  getProducts: () => ipcRenderer.invoke('get-products'),

  addProduct: (product) => ipcRenderer.invoke('add-product', product),

  updateProduct: (product) => ipcRenderer.invoke('update-product', product),

  deleteProduct: (id) => ipcRenderer.invoke('delete-product', id),

  // =========================
  // 🔍 SEARCH PRODUCTS
  // =========================

  searchProducts: (query) => ipcRenderer.invoke('search-products', query),

  // =========================
  // 🧾 SALES SYSTEM
  // =========================

  createSale: (data) => ipcRenderer.invoke('create-sale', data),

  // =========================
  // 📊 REPORTING SYSTEM (🔥 NEW)
  // =========================

  getSalesReport: () => ipcRenderer.invoke('get-sales-report'),

  getTotalRevenue: () => ipcRenderer.invoke('get-total-revenue'),

  getDailySales: () => ipcRenderer.invoke('get-daily-sales')
}

// =========================
// 🌐 SAFE EXPOSURE
// =========================
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('Preload error:', error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
