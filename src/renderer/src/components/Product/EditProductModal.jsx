// import { useState, useEffect } from 'react'

// const EditProductModal = ({ isOpen, onClose, onEdit, product }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     expDate: '',
//     category: '',
//     stock: '',
//     price: ''
//   })

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         name: product.name,
//         expDate: product.expDate,
//         category: product.category,
//         stock: product.stock,
//         price: product.price
//       })
//     }
//   }, [product])

//   function handleChange(e) {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     const updatedProduct = {
//       ...product,
//       name: formData.name,
//       expDate: formData.expDate,
//       category: formData.category,
//       stock: Number(formData.stock),
//       price: Number(formData.price)
//     }
//     onEdit(updatedProduct)
//     onClose()
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
//         <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />

//           <input
//             type="date"
//             name="expDate"
//             placeholder="Expiry Date"
//             value={formData.expDate}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />

//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />

//           <input
//             type="number"
//             name="stock"
//             placeholder="Stock"
//             value={formData.stock}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />

//           <input
//             type="number"
//             step="0.01"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />

//           <div className="flex justify-end gap-3 pt-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded bg-gray-200 cursor-pointer"
//             >
//               Cancel
//             </button>

//             <button type="submit" className="px-4 py-2 rounded bg-black text-white cursor-pointer">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default EditProductModal

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
