import { Pencil, Trash2 } from 'lucide-react'

const ProductsTable = () => {
  const products = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe',
      expDate: '21/12/2027',
      category: 'Coffee Beans',
      stock: 42,
      price: 28.5
    }
  ]

  return (
    <div className="bg-white mx-6 mb-6 rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        {/* Header */}
        <thead>
          <tr className="bg-[#f5f3ef] text-[#4e4541]">
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Product Info</th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Category</th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Stock</th>
            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">
              Price
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
              <td colSpan={5} className="text-center py-10 text-sm text-[#4e4541]">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-5 cursor-pointer">
                  <p className="font-semibold text-[#1b1c1a]">{product.name}</p>
                  <p className="text-xs text-[#4e4541]">EXP: {product.expDate}</p>
                </td>

                <td className="px-6 py-5">
                  <span className="px-3 py-1 rounded-full bg-[#d4e9c4] text-[#101f09] text-xs font-semibold cursor-pointer">
                    {product.category}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm font-bold text-[#1b1c1a] cursor-pointer">
                  {product.stock}
                </td>

                <td className="px-6 py-5 text-right font-semibold text-[#1b1c1a] cursor-pointer">
                  {Number(product.price).toFixed(2)}
                </td>

                <td className="px-6 py-5 text-right">
                  <button
                    aria-label="Edit product"
                    className="p-2 text-[#7f7571] hover:text-[#396662] transition-colors cursor-pointer"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    aria-label="Delete product"
                    className="p-2 text-[#7f7571] hover:text-[#ba1a1a] transition-colors cursor-pointer"
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
