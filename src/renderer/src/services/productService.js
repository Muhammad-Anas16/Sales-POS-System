// Get all Products
export const getProducts = async () => {
  try {
    const data = await window.api.getProducts()
    return data
  } catch (error) {
    console.log('Error while fetching products: ', error)
    return []
  }
}

// Add a Product
export const addProducts = async (product) => {
  try {
    const data = await window.api.addProduct(product)
    return data
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
