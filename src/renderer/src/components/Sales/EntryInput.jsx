// import { useState } from 'react'

// const EntryInput = () => {
//   const [form, setForm] = useState({
//     name: '',
//     qty: '',
//     disc: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target

//     setForm((prev) => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleAdd = () => {
//     // You can connect this later with BillingTable
//     console.log('New Entry:', form)

//     setForm({
//       name: '',
//       qty: '',
//       disc: ''
//     })
//   }

//   return (
//     <div className="mt-6 p-4 bg-gray-100 border-2 border-[#35625E]">
//       {/* Header */}
//       <div className="text-[9px] font-bold mb-2 flex justify-between text-[#35625E]">
//         <span>[ CMD_BAR ] NEW_ENTRY</span>
//         <span className="font-mono text-red-600">F5: SEARCH_ITEM</span>
//       </div>

//       {/* Inputs */}
//       <div className="grid grid-cols-12 gap-2">
//         {/* Product Name */}
//         <div className="col-span-6">
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="PRODUCT NAME"
//             className="w-full bg-white border border-[#35625E] text-xs p-1 outline-none uppercase focus:bg-white"
//           />
//         </div>

//         {/* Qty */}
//         <div className="col-span-2">
//           <input
//             type="number"
//             name="qty"
//             value={form.qty}
//             onChange={handleChange}
//             placeholder="QTY"
//             className="w-full bg-white border border-[#35625E] text-xs p-1 outline-none focus:bg-white"
//           />
//         </div>

//         {/* Discount */}
//         <div className="col-span-2">
//           <input
//             type="number"
//             name="disc"
//             value={form.disc}
//             onChange={handleChange}
//             placeholder="DISC"
//             className="w-full bg-white border border-[#35625E] text-xs p-1 outline-none focus:bg-white"
//           />
//         </div>

//         {/* Add Button */}
//         <div className="col-span-2">
//           <button
//             onClick={handleAdd}
//             className="w-full h-full bg-gradient-to-br from-[#396662] to-[#325f5b] text-white text-[10px] font-bold uppercase focus:bg-gray-800 cursor-pointer"
//           >
//             ADD
//           </button>
//         </div>
//       </div>

//       {/* Footer hint */}
//       <p className="text-[8px] text-gray-900 mt-2 opacity-50 uppercase">
//         PRESS [ ENTER ] TO COMMIT TO TRANSACTION
//       </p>
//     </div>
//   )
// }

// export default EntryInput

// import { useState, useEffect } from 'react'
// import { searchProducts } from '../../services/productService'

// const EntryInput = ({ onAdd }) => {
//   const [name, setName] = useState('')
//   const [qty, setQty] = useState('')
//   const [disc, setDisc] = useState('')
//   const [results, setResults] = useState([])
//   const [selected, setSelected] = useState(null)

//   useEffect(() => {
//     const fetch = async () => {
//       if (!name) return setResults([])

//       const data = await searchProducts(name)
//       setResults(data)
//     }
//     fetch()
//   }, [name])

//   const selectProduct = (p) => {
//     setSelected(p)
//     setName(p.name)
//     setResults([])
//   }

//   const handleAdd = () => {
//     if (!selected) return alert('Select product')

//     onAdd(selected, Number(qty), Number(disc))

//     setName('')
//     setQty('')
//     setDisc('')
//     setSelected(null)
//   }

//   return (
//     <div className="relative">
//       <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product" />

//       {/* Dropdown (ONLY NAME) */}
//       {results.length > 0 && (
//         <div className="absolute bg-white border w-full z-10">
//           {results.map((p) => (
//             <div
//               key={p.id}
//               onClick={() => selectProduct(p)}
//               className="p-2 cursor-pointer hover:bg-gray-200"
//             >
//               {p.name}
//             </div>
//           ))}
//         </div>
//       )}

//       <input value={qty} onChange={(e) => setQty(e.target.value)} placeholder="Qty" />
//       <input value={disc} onChange={(e) => setDisc(e.target.value)} placeholder="Disc" />

//       <button onClick={handleAdd}>ADD</button>
//     </div>
//   )
// }

// export default EntryInput

// import { useState, useEffect } from 'react'
// import { searchProducts } from '../../services/productService'

// const EntryInput = ({ onAdd }) => {
//   const [name, setName] = useState('')
//   const [qty, setQty] = useState(1)
//   const [disc, setDisc] = useState(0)
//   const [results, setResults] = useState([])
//   const [selected, setSelected] = useState(null)

//   useEffect(() => {
//     const fetch = async () => {
//       if (!name) return setResults([])
//       const data = await searchProducts(name)
//       setResults(data)
//     }
//     fetch()
//   }, [name])

//   const selectProduct = (p) => {
//     setSelected(p)
//     setName(p.name)
//     setResults([])

//     // 🔥 AUTO ADD (qty = 1)
//     onAdd(p, 1, 0)
//   }

//   const handleAdd = () => {
//     if (!selected) return alert('Select product')

//     onAdd(selected, Number(qty), Number(disc))

//     setName('')
//     setQty(1)
//     setDisc(0)
//     setSelected(null)
//   }

//   return (
//     <div className="relative flex gap-2">
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Search product..."
//         className="border p-2 w-1/2"
//       />

//       {/* Dropdown */}
//       {results.length > 0 && (
//         <div className="absolute top-10 bg-white border w-1/2 z-10 max-h-40 overflow-y-auto">
//           {results.map((p) => (
//             <div
//               key={p.id}
//               onClick={() => selectProduct(p)}
//               className="p-2 cursor-pointer hover:bg-gray-200"
//             >
//               {p.name} — Rs {p.price}
//             </div>
//           ))}
//         </div>
//       )}

//       <input
//         type="number"
//         value={qty}
//         onChange={(e) => setQty(e.target.value)}
//         placeholder="Qty"
//         className="border p-2 w-20"
//       />

//       <input
//         type="number"
//         value={disc}
//         onChange={(e) => setDisc(e.target.value)}
//         placeholder="Disc"
//         className="border p-2 w-20"
//       />

//       <button onClick={handleAdd} className="bg-black text-white px-4">
//         ADD
//       </button>
//     </div>
//   )
// }

// export default EntryInput

import { useState, useEffect } from 'react'
import { searchProducts } from '../../services/productService'

const EntryInput = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1)
  const [disc, setDisc] = useState(0)
  const [type, setType] = useState('item') // 🔥
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      if (!name) return setResults([])
      const data = await searchProducts(name)
      setResults(data)
    }
    fetch()
  }, [name])

  const selectProduct = (p) => {
    setSelected(p)
    setName(p.name)
    setResults([])
  }

  const handleAdd = () => {
    if (!selected) return alert('Select product')

    onAdd(selected, Number(qty), Number(disc), type)

    setName('')
    setQty(1)
    setDisc(0)
    setSelected(null)
  }

  return (
    <div className="relative flex gap-2 items-center">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search product..."
        className="border p-2 w-1/3"
      />

      {/* Dropdown */}
      {results.length > 0 && (
        <div className="absolute top-10 bg-white border w-1/3 z-10">
          {results.map((p) => (
            <div
              key={p.id}
              onClick={() => selectProduct(p)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {p.name}
            </div>
          ))}
        </div>
      )}

      {/* TYPE */}
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2">
        <option value="item">Item</option>
        <option value="box">Box</option>
      </select>

      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="border p-2 w-20"
        placeholder="Qty"
      />

      <input
        type="number"
        value={disc}
        onChange={(e) => setDisc(e.target.value)}
        className="border p-2 w-20"
        placeholder="Disc"
      />

      <button onClick={handleAdd} className="bg-black text-white px-4 py-2">
        ADD
      </button>
    </div>
  )
}

export default EntryInput
