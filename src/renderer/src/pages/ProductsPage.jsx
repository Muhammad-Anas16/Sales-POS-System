import ProductPageHeader from '../components/Product/ProductPageHeader'
import SearchProduct from '../components/Product/SearchProduct'
import ProductsTable from '../components/Product/ProductsTable'
import EditProductModal from '../components/Product/EditProductModal'
import { getProducts, addProduct, deleteProduct, updateProduct } from '../services/productService'
import { useEffect, useState } from 'react'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
  const [isEditOpen, setIsEditOpen] = useState(false)

  // =========================
  // 📦 Fetch Products
  // =========================
  const handleFetch = async () => {
    try {
      const data = await getProducts()
      setProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleAdd = async (product) => {
    try {
      await addProduct({
        ...product,
        stock: Number(product.stock),
        boxPrice: Number(product.boxPrice),
        itemsPerBox: Number(product.itemsPerBox)
      })

      await handleFetch()
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id)
      setProducts((prev) => prev.filter((p) => p.id !== Number(id)))
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsEditOpen(true)
  }

  const handleSaveEdit = async (updatedProduct) => {
    try {
      await updateProduct({
        ...updatedProduct,
        stock: Number(updatedProduct.stock),
        price: Number(updatedProduct.price)
      })

      setProducts((prev) => prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)))

      setIsEditOpen(false)
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [handleAdd, handleDelete, handleSaveEdit]) // ✅ empty dependency

  return (
    <div className="px-3 py-6 bg-[#fbf9f5] text-[#1b1c1a] min-h-screen">
      <ProductPageHeader onAdd={handleAdd} />

      <div className="bg-[#efeeea] rounded-xl overflow-hidden shadow-sm">
        <SearchProduct />

        <ProductsTable
          productsData={products}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>

      <EditProductModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onEdit={handleSaveEdit}
        product={editingProduct}
      />
    </div>
  )
}

export default ProductsPage
