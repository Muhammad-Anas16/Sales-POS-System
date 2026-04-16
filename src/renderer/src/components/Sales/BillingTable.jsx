const BillingTable = ({ items, onUpdate, onRemove }) => {
  return (
    <table className="w-full text-sm">
      <thead className="bg-[#f1f1ee]">
        <tr>
          <th className="p-3 text-left">Type</th>
          <th className="p-3">Qty</th>
          <th className="p-3 text-left">Product</th>
          <th className="p-3">Price</th>
          <th className="p-3">Disc</th>
          <th className="p-3">Total</th>
          <th className="p-3"></th>
        </tr>
      </thead>

      <tbody>
        {items.map((i) => (
          <tr key={`${i.productId}-${i.type}`} className="border-t hover:bg-gray-50">
            <td className="p-3 font-semibold text-xs">{i.type === 'box' ? 'BOX' : 'ITEM'}</td>

            <td className="p-3 text-center">
              <input
                type="number"
                value={i.quantity}
                onChange={(e) => onUpdate(i.productId, 'quantity', e.target.value)}
                className="w-16 border rounded px-2 py-1 text-center"
              />
            </td>

            <td className="p-3">{i.name}</td>

            <td className="p-3 text-center">
              <input
                type="number"
                value={i.price}
                onChange={(e) => onUpdate(i.productId, 'price', e.target.value)}
                className="w-20 border rounded px-2 py-1 text-center"
              />
            </td>

            <td className="p-3 text-center">
              <input
                type="number"
                value={i.disc}
                onChange={(e) => onUpdate(i.productId, 'disc', e.target.value)}
                className="w-16 border rounded px-2 py-1 text-center"
              />
            </td>

            <td className="p-3 font-semibold text-center">
              {(i.price * i.quantity - i.disc).toFixed(2)}
            </td>

            <td className="p-3 text-center">
              <button
                onClick={() => onRemove(i.productId)}
                className="text-red-500 hover:scale-110"
              >
                ✕
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BillingTable
