import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import AddProductModal from './AddProductModal'

const ProductPageHeader = ({ onAdd }) => {
  const [open, setOpen] = useState(false)

  const handleAdd = async (product) => {
    await onAdd(product)
    setOpen(false)
  }

  return (
    <header className="flex justify-between gap-6 mb-10 px-6">
      <div>
        <h1 className="text-2xl font-black text-[#1b1c1a] mb-2">Products</h1>
        <p className="text-[#4e4541] font-medium">Manage offerings and stock levels.</p>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-6 py-2 rounded-xl bg-[#396662] text-white text-sm font-medium hover:bg-[#2f4f4f] transition-colors"
      >
        <PlusCircle size={20} />
        Add Product
      </button>

      <AddProductModal isOpen={open} onClose={() => setOpen(false)} onAdd={handleAdd} />
    </header>
  )
}

export default ProductPageHeader
