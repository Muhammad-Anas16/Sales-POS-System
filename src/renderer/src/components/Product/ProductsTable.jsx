// import { Pencil, Trash2 } from 'lucide-react'

// const ProductsTable = ({ productsData, handleDelete, handleEdit }) => {
//   const products = productsData || []

//   return (
//     <div className="bg-white mx-6 mb-6 rounded-xl overflow-hidden">
//       <table className="w-full text-left border-collapse">
//         {/* Header */}
//         <thead>
//           <tr className="bg-[#f5f3ef] text-[#4e4541]">
//             <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Product Info</th>
//             <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Category</th>
//             <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Stock</th>
//             <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">
//               Price
//             </th>
//             <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">
//               Actions
//             </th>
//           </tr>
//         </thead>

//         {/* Body */}
//         <tbody className="divide-y divide-[#d1c4bf]/20">
//           {products.length === 0 ? (
//             <tr>
//               <td colSpan={5} className="text-center py-10 text-sm text-[#4e4541]">
//                 No products found
//               </td>
//             </tr>
//           ) : (
//             products.map((product) => (
//               <tr key={product.id}>
//                 <td className="px-6 py-5">
//                   <p className="font-semibold text-[#1b1c1a] cursor-pointer">{product.name}</p>
//                   <p className="text-xs text-[#4e4541] cursor-pointer">EXP: {product.expDate}</p>
//                 </td>

//                 <td className="px-6 py-5">
//                   <span className="px-3 py-1 rounded-full bg-[#d4e9c4] text-[#101f09] text-xs font-semibold cursor-pointer">
//                     {product.category}
//                   </span>
//                 </td>

//                 <td className="px-6 py-5 text-sm font-bold text-[#1b1c1a]">{product.stock}</td>

//                 <td className="px-6 py-5 text-right font-semibold text-[#1b1c1a] cursor-pointer">
//                   {Number(product.price).toFixed(2)}
//                 </td>

//                 {/* ✅ Actions */}
//                 <td className="px-6 py-5 text-right space-x-2">
//                   {/* ✏️ Edit */}
//                   <button
//                     onClick={() => handleEdit(product)}
//                     aria-label="Edit product"
//                     className="p-2 text-[#7f7571] hover:text-[#396662] transition-colors cursor-pointer"
//                   >
//                     <Pencil size={16} />
//                   </button>

//                   {/* 🗑 Delete */}
//                   <button
//                     data-id={product.id}
//                     // onClick={(e) => console.log('Button element:', e.currentTarget.dataset.id)}
//                     onClick={() => handleDelete(product.id)}
//                     aria-label="Delete product"
//                     className="p-2 text-[#7f7571] hover:text-[#ba1a1a] transition-colors cursor-pointer"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default ProductsTable

import { Pencil, Trash2 } from 'lucide-react'

const ProductsTable = ({ productsData, handleDelete, handleEdit }) => {
  const products = productsData || []

  return (
    <div className="bg-white mx-6 mb-6 rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        {/* Header */}
        <thead>
          <tr className="bg-[#f5f3ef] text-[#4e4541]">
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Product Info</th>

            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Category</th>

            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Stock (Boxes)</th>

            {/* ✅ NEW */}
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Box Price</th>

            {/* ✅ NEW */}
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Items / Box</th>

            {/* ✅ UPDATED */}
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">
              Per Item Price
            </th>

            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">
              Actions
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-[#d1c4bf]/20">
          {products.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-10 text-sm text-[#4e4541]">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                {/* Product Info */}
                <td className="px-6 py-5">
                  <p className="font-semibold text-[#1b1c1a] cursor-pointer">{product.name}</p>
                  <p className="text-xs text-[#4e4541] cursor-pointer">EXP: {product.expDate}</p>
                </td>

                {/* Category */}
                <td className="px-6 py-5">
                  <span className="px-3 py-1 rounded-full bg-[#d4e9c4] text-[#101f09] text-xs font-semibold cursor-pointer">
                    {product.category}
                  </span>
                </td>

                {/* Stock */}
                <td className="px-6 py-5 text-sm font-bold text-[#1b1c1a]">{product.stock}</td>

                {/* ✅ Box Price */}
                <td className="px-6 py-5 text-sm font-medium text-[#1b1c1a]">
                  {Number(product.boxPrice || 0).toFixed(2)}
                </td>

                {/* ✅ Items Per Box */}
                <td className="px-6 py-5 text-sm font-medium text-[#1b1c1a]">
                  {product.itemsPerBox || 0}
                </td>

                {/* ✅ Per Item Price */}
                <td className="px-6 py-5 text-right font-semibold text-[#1b1c1a]">
                  {Number(product.price || 0).toFixed(2)}
                </td>

                {/* Actions */}
                <td className="px-6 py-5 text-right space-x-2">
                  {/* Edit */}
                  <button
                    onClick={() => handleEdit(product)}
                    aria-label="Edit product"
                    className="p-2 text-[#7f7571] hover:text-[#396662] transition-colors"
                  >
                    <Pencil size={16} />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(product.id)}
                    aria-label="Delete product"
                    className="p-2 text-[#7f7571] hover:text-[#ba1a1a] transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
