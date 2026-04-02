import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import AddProductModal from './AddProductModal'
import { addProducts, getProducts } from '../../services/productService'

const ProductPageHeader = () => {
  // const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)

  const handleAdd = async (product) => {
    await addProducts(product)
    console.log('Adding product: ', product)

    // const data = await getProducts()

    // console.log('Fetched products: ', data)
  }

  const handleFetch = async () => {
    const data = await getProducts()
    console.log('Fetched products: ', data)
  }

  handleFetch()

  // console.log('Products: ', products)

  return (
    <header className="flex justify-between gap-6 mb-10">
      <div>
        <h1 className="text-2xl font-black font-manrope text-[#1b1c1a] tracking-tight mb-2">
          Products
        </h1>

        <p className="text-[#4e4541] font-medium max-w-md">Manage offerings and stock levels.</p>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="
          inline-flex items-center justify-center gap-2
          bg-gradient-to-br from-[#396662] to-[#a8d7d2]
          text-on-[#396662]
          px-6 py-3
          rounded-xl
          font-semibold text-base
          shadow-[0_12px_40px_rgba(57,102,98,0.15)]
          transition-all duration-300
          hover:scale-[1.03] hover:shadow-xl
          active:scale-[0.98]
          focus:outline-none focus:ring-2 focus:ring-[#396662]/40 cursor-pointer
        "
      >
        <PlusCircle size={20} />
        Add Product
      </button>
      <AddProductModal isOpen={open} onClose={() => setOpen(false)} onAdd={handleAdd} />
    </header>
  )
}

export default ProductPageHeader
