// Get all Products
export const getProducts = async () => {
  try {
    return await window.api.getProducts()
  } catch (error) {
    console.log('Error while fetching products: ', error)
    return []
  }
}

// Add a Product
export const addProduct = async (product) => {
  try {
    return await window.api.addProduct(product)
  } catch (error) {
    console.log('Error while adding product: ', error)
  }
}

// Update Product
export const updateProduct = async (product) => {
  try {
    return await window.api.updateProduct(product)
  } catch (error) {
    console.error('Error updating product:', error)
  }
}

// Delete Product
export const deleteProduct = async (id) => {
  try {
    return await window.api.deleteProduct(id)
  } catch (error) {
    console.error('Error deleting product:', error)
  }
}

// =========================
// 🔍 SEARCH PRODUCTS
// =========================

export const searchProducts = async (query) => {
  try {
    return await window.api.searchProducts(query)
  } catch (error) {
    console.error('Error searching products:', error)
    return []
  }
}

// =========================
// 🧾 BILLING / SALES
// =========================

export const createSale = async (saleData) => {
  try {
    return await window.api.createSale(saleData)
  } catch (error) {
    console.error('Error creating sale:', error)
  }
}

// =========================
// 🧾 Get all sales history
// =========================

export const getFullSales = async () => {
  try {
    return await window.api.getFullSales()
  } catch (error) {
    console.error('Error fetching full sales:', error)
    return []
  }
}
