// import { contextBridge, ipcRenderer } from 'electron'
// import { electronAPI } from '@electron-toolkit/preload'

// // =========================
// // 🧠 CUSTOM API WRAPPER
// // =========================
// const api = {
//   // =========================
//   // 🧾 PRODUCTS CRUD
//   // =========================

//   getProducts: () => ipcRenderer.invoke('get-products'),

//   addProduct: (product) => ipcRenderer.invoke('add-product', product),

//   updateProduct: (product) => ipcRenderer.invoke('update-product', product),

//   deleteProduct: (id) => ipcRenderer.invoke('delete-product', id),

//   // =========================
//   // 🔍 SEARCH PRODUCTS
//   // =========================

//   searchProducts: (query) => ipcRenderer.invoke('search-products', query),

//   // =========================
//   // 🧾 SALES SYSTEM
//   // =========================

//   createSale: (data) => ipcRenderer.invoke('create-sale', data),

//   // =========================
//   // 📊 REPORTING SYSTEM (🔥 NEW)
//   // =========================

//   getSalesReport: () => ipcRenderer.invoke('get-sales-report'),

//   getTotalRevenue: () => ipcRenderer.invoke('get-total-revenue'),

//   getDailySales: () => ipcRenderer.invoke('get-daily-sales')
// }

// // =========================
// // 🌐 SAFE EXPOSURE
// // =========================
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)
//   } catch (error) {
//     console.error('Preload error:', error)
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
  // 📊 REPORTING SYSTEM
  // =========================

  getSalesReport: () => ipcRenderer.invoke('get-sales-report'),

  getTotalRevenue: () => ipcRenderer.invoke('get-total-revenue'),

  getDailySales: () => ipcRenderer.invoke('get-daily-sales'),

  // =========================
  // 🧾 FULL SALES HISTORY (🔥 NEW)
  // =========================

  getFullSales: () => ipcRenderer.invoke('get-full-sales')
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
