import { useState } from 'react'
import { Plus, CreditCard } from 'lucide-react'

const BillingSidebar = () => {
  const [items] = useState([
    { id: 1, name: 'House Blend Coffee', price: 12.5 },
    { id: 2, name: 'Iced Latte XL', price: 15.0 },
    { id: 3, name: 'Blueberry Muffin', price: 8.75 }
  ])

  const [cart, setCart] = useState([])

  const handleAdd = (item) => {
    const existing = cart.find((i) => i.id === item.id)

    if (existing) {
      setCart((prev) => prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)))
    } else {
      setCart((prev) => [...prev, { ...item, qty: 1 }])
    }
  }

  const handleClear = () => {
    setCart([])
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  const tax = subtotal * 0.08
  const grandTotal = subtotal + tax

  return (
    <aside className="w-full md:w-80 flex flex-col gap-6">
      {/* Quick Add */}
      <div className="bg-surface-container-highest rounded-xl p-4">
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant mb-3">
          Quick Add Item
        </p>

        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleAdd(item)}
              className="p-3 bg-surface-container-lowest rounded-lg border border-transparent hover:border-primary/20 cursor-pointer flex justify-between items-center transition-all group"
            >
              <span className="text-xs font-semibold">{item.name}</span>

              <span className="text-[10px] font-bold text-primary flex items-center gap-1 group-hover:underline">
                <Plus size={12} />
                Add
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <section className="bg-teal-900 text-white rounded-2xl p-6 shadow-xl flex flex-col gap-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-70">Subtotal</span>
            <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm opacity-70">Tax (8%)</span>
            <span className="text-sm font-medium">${tax.toFixed(2)}</span>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-end">
            <span className="text-xs font-bold uppercase tracking-widest opacity-90">
              Grand Total
            </span>
            <span className="text-3xl font-extrabold">${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button
            onClick={handleClear}
            className="bg-white/10 hover:bg-white/20 text-white rounded-xl py-4 font-bold text-sm transition-all active:scale-95"
          >
            Clear Bill
          </button>

          <button className="bg-gradient-to-br from-primary to-primary-dim text-white rounded-xl py-4 font-bold text-sm shadow-lg hover:brightness-110 transition-all active:scale-95">
            Save & Close
          </button>
        </div>

        {/* Pay Now */}
        <button className="w-full bg-white text-teal-900 rounded-xl py-5 font-extrabold text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-teal-50 transition-all active:scale-[0.98]">
          <CreditCard size={20} />
          Pay Now
        </button>
      </section>
    </aside>
  )
}

export default BillingSidebar
