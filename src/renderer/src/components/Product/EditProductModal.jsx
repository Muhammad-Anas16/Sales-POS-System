import { useState, useEffect } from 'react'

const EditProductModal = ({ isOpen, onClose, onEdit, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    expDate: '',
    category: '',
    stock: '',
    boxPrice: '',
    itemsPerBox: ''
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        expDate: product.expDate,
        category: product.category,
        stock: product.stock,
        boxPrice: product.boxPrice,
        itemsPerBox: product.itemsPerBox
      })
    }
  }, [product])

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const updatedProduct = {
      ...product,
      ...formData,
      stock: Number(formData.stock),
      boxPrice: Number(formData.boxPrice),
      itemsPerBox: Number(formData.itemsPerBox)
    }

    onEdit(updatedProduct)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2"
          />
          <input
            type="date"
            name="expDate"
            value={formData.expDate}
            onChange={handleChange}
            className="w-full border p-2"
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2"
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Boxes Stock"
            className="w-full border p-2"
          />

          <input
            type="number"
            name="boxPrice"
            value={formData.boxPrice}
            onChange={handleChange}
            placeholder="Box Price"
            className="w-full border p-2"
          />
          <input
            type="number"
            name="itemsPerBox"
            value={formData.itemsPerBox}
            onChange={handleChange}
            placeholder="Items per Box"
            className="w-full border p-2"
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProductModal
