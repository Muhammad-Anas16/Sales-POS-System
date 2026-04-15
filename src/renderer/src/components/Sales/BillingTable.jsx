// import { useState } from 'react'

// const BillingTable = () => {
//   const [items] = useState([
//     {
//       id: 1,
//       name: 'AMOXICILLIN 500MG (30 CT)',
//       rate: 24.5,
//       disc: 0.0,
//       qty: 1
//     }
//   ])

//   const getAmount = (item) => item.rate * item.qty

//   return (
//     <div className="border-t-2 border-black">
//       <table className="w-full text-xs border-collapse">
//         {/* Header */}
//         <thead className="text-[10px] font-black text-[#35625E] tracking-tighter text-left border-b border-black">
//           <tr>
//             <th className="py-2 w-8">QTY</th>
//             <th className="py-2 px-2">ITEM_DESCRIPTION</th>
//             <th className="py-2 text-right">RATE</th>
//             <th className="py-2 text-right w-12">DISC</th>
//             <th className="py-2 text-right">AMOUNT</th>
//           </tr>
//         </thead>

//         {/* Body */}
//         <tbody className="divide-y divide-dashed divide-gray-300">
//           {items ? (
//             items.map((item) => (
//               <tr key={item.id}>
//                 <td className="py-3">{String(item.qty).padStart(2, '0')}</td>
//                 <td className="py-3 px-2 uppercase">{item.name}</td>
//                 <td className="py-3 text-right">{item.rate.toFixed(2)}</td>
//                 <td className="py-3 text-right">{item.disc.toFixed(2)}</td>
//                 <td className="py-3 text-right font-bold">{getAmount(item).toFixed(2)}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="py-3 text-center text-gray-500">
//                 No items added yet
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default BillingTable

// const BillingTable = ({ items, onUpdate, onRemove }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Qty</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Disc</th>
//           <th>Total</th>
//           <th></th>
//         </tr>
//       </thead>

//       <tbody>
//         {items.map((i) => (
//           <tr key={i.productId}>
//             <td>
//               <input
//                 value={i.quantity}
//                 onChange={(e) => onUpdate(i.productId, 'quantity', e.target.value)}
//               />
//             </td>

//             <td>{i.name}</td>

//             <td>{i.price}</td>

//             <td>
//               <input
//                 value={i.disc}
//                 onChange={(e) => onUpdate(i.productId, 'disc', e.target.value)}
//               />
//             </td>

//             <td>{i.price * i.quantity - i.disc}</td>

//             <td>
//               <button onClick={() => onRemove(i.productId)}>X</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }

// export default BillingTable

// const BillingTable = ({ items, onUpdate, onRemove }) => {
//   return (
//     <table className="w-full border mt-4">
//       <thead className="bg-gray-100">
//         <tr>
//           <th>Qty</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Disc</th>
//           <th>Total</th>
//           <th></th>
//         </tr>
//       </thead>

//       <tbody>
//         {items.map((i) => (
//           <tr key={i.productId} className="border-t">
//             {/* QTY */}
//             <td>
//               <input
//                 type="number"
//                 value={i.quantity}
//                 onChange={(e) => onUpdate(i.productId, 'quantity', e.target.value)}
//                 className="w-16 border"
//               />
//             </td>

//             {/* NAME */}
//             <td>{i.name}</td>

//             {/* PRICE (EDITABLE) */}
//             <td>
//               <input
//                 type="number"
//                 value={i.price}
//                 onChange={(e) => onUpdate(i.productId, 'price', e.target.value)}
//                 className="w-20 border"
//               />
//             </td>

//             {/* DISC */}
//             <td>
//               <input
//                 type="number"
//                 value={i.disc}
//                 onChange={(e) => onUpdate(i.productId, 'disc', e.target.value)}
//                 className="w-16 border"
//               />
//             </td>

//             {/* TOTAL */}
//             <td>{(i.price * i.quantity - i.disc).toFixed(2)}</td>

//             {/* REMOVE */}
//             <td>
//               <button onClick={() => onRemove(i.productId)}>❌</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }

// export default BillingTable

const BillingTable = ({ items, onUpdate, onRemove }) => {
  return (
    <table className="w-full border mt-4 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2">Type</th>
          <th className="p-2">Qty</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2">Price</th>
          <th className="p-2">Disc</th>
          <th className="p-2">Total</th>
          <th className="p-2"></th>
        </tr>
      </thead>

      <tbody>
        {items.map((i) => (
          <tr key={`${i.productId}-${i.type}`} className="border-t text-center">
            {/* TYPE */}
            <td className="p-2 font-bold text-xs">{i.type === 'box' ? 'BOX' : 'ITEM'}</td>

            {/* QTY */}
            <td className="p-2">
              <input
                type="number"
                min="1"
                value={i.quantity}
                onChange={(e) => onUpdate(i.productId, 'quantity', e.target.value)}
                className="w-16 border rounded px-1 text-center"
              />
            </td>

            {/* NAME */}
            <td className="p-2 text-left">{i.name}</td>

            {/* PRICE */}
            <td className="p-2">
              <input
                type="number"
                value={i.price}
                onChange={(e) => onUpdate(i.productId, 'price', e.target.value)}
                className="w-20 border rounded px-1 text-center"
              />
            </td>

            {/* DISC */}
            <td className="p-2">
              <input
                type="number"
                value={i.disc}
                onChange={(e) => onUpdate(i.productId, 'disc', e.target.value)}
                className="w-16 border rounded px-1 text-center"
              />
            </td>

            {/* TOTAL */}
            <td className="p-2 font-semibold">{(i.price * i.quantity - i.disc).toFixed(2)}</td>

            {/* REMOVE */}
            <td className="p-2">
              <button
                onClick={() => onRemove(i.productId)}
                className="text-red-500 hover:scale-110"
              >
                ❌
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BillingTable
