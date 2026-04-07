import { useState } from 'react'
import { Plus, Minus, Trash2 } from 'lucide-react'

const BillingTable = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Artisan Espresso Roast',
      sku: 'CF-882-DRK',
      price: 18.5,
      qty: 2
    }
  ])

  const handleIncrease = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)))
  }

  const handleDecrease = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item))
    )
  }

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const getTotal = (item) => item.price * item.qty

  const grandTotal = items.reduce((acc, item) => acc + getTotal(item), 0)

  return (
    <section className="flex-1 bg-[#ffffff] rounded-xl shadow-[0_12px_32px_rgba(0,105,112,0.06)] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#e3e9ec] flex justify-between items-center">
        <h2 className="font-bold text-teal-800">Current Order Items</h2>
        <span className="bg-[#e0e3e3] text-[#4f5253] text-[10px] font-bold px-2.5 py-1 rounded-full">
          {items.length} ITEMS
        </span>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto p-2">
        <table className="w-full text-left border-separate border-spacing-y-3 px-4">
          <thead>
            <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <th className="pb-2 px-2">Product</th>
              <th className="pb-2 px-2 text-center">Qty</th>
              <th className="pb-2 px-2 text-right">Price</th>
              <th className="pb-2 px-2 text-right">Total</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="group hover:bg-[#f1f4f6] transition-colors rounded-xl">
                {/* Product */}
                <td className="py-3 px-2 rounded-l-xl">
                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-[10px] text-[#4f5253] mt-1">SKU: {item.sku}</p>
                  </div>
                </td>

                {/* Qty */}
                <td className="py-3 px-2 text-center">
                  <div className="inline-flex items-center bg-[#e3e9ec] rounded-full px-2 py-1">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-full"
                    >
                      <Minus size={14} />
                    </button>

                    <input
                      value={item.qty}
                      readOnly
                      className="w-8 bg-transparent border-none text-center text-xs font-bold"
                    />

                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-full"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </td>

                {/* Price */}
                <td className="py-3 px-2 text-right font-medium text-sm">
                  ${item.price.toFixed(2)}
                </td>

                {/* Total */}
                <td className="py-3 px-2 text-right font-bold text-sm">
                  ${getTotal(item).toFixed(2)}
                </td>

                {/* Delete */}
                <td className="py-3 px-2 text-right rounded-r-xl">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-400 hover:text-red-500 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Total */}
      <div className="px-6 py-4 border-t border-[#e3e9ec] flex justify-between items-center">
        <span className="font-bold text-sm text-gray-600">Grand Total</span>
        <span className="font-bold text-lg text-teal-700">${grandTotal.toFixed(2)}</span>
      </div>
    </section>
  )
}

export default BillingTable
