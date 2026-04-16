// import { useState } from 'react'

// const AddProductModal = ({ isOpen, onClose, onAdd }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     expDate: '',
//     category: '',
//     stock: '',
//     price: ''
//   })

//   function handleChange(e) {
//     const name = e.target.name
//     const value = e.target.value

//     setFormData(function (prev) {
//       return { ...prev, [name]: value }
//     })
//   }

//   function handleSubmit(e) {
//     e.preventDefault()

//     const newProduct = {
//       id: Date.now(),
//       name: formData.name,
//       expDate: formData.expDate,
//       category: formData.category,
//       stock: Number(formData.stock),
//       price: Number(formData.price)
//     }

//     onAdd(newProduct)
//     onClose()

//     setFormData({
//       name: '',
//       expDate: '',
//       category: '',
//       stock: '',
//       price: ''
//     })
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
//         <h2 className="text-2xl font-bold mb-4">Add Product</h2>

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
//             placeholder="Expiry Date (dd/mm/yyyy)"
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
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AddProductModal

import { useState } from 'react'

const AddProductModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    expDate: '',
    category: '',
    stock: '',
    boxPrice: '',
    itemsPerBox: ''
  })

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newProduct = {
      name: formData.name,
      expDate: formData.expDate,
      category: formData.category,
      stock: Number(formData.stock),
      boxPrice: Number(formData.boxPrice),
      itemsPerBox: Number(formData.itemsPerBox)
    }

    onAdd(newProduct)
    onClose()

    setFormData({
      name: '',
      expDate: '',
      category: '',
      stock: '',
      boxPrice: '',
      itemsPerBox: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="date"
            name="expDate"
            value={formData.expDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Boxes Stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="number"
            step="0.01"
            name="boxPrice"
            placeholder="Box Price"
            value={formData.boxPrice}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="number"
            name="itemsPerBox"
            placeholder="Items per Box"
            value={formData.itemsPerBox}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 cursor-pointer"
            >
              Cancel
            </button>

            <button type="submit" className="px-4 py-2 rounded bg-black text-white cursor-pointer">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProductModal
