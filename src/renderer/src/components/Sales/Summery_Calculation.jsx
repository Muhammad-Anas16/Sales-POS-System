// const Summery_Calculation = () => {
//   return (
//     <div className="space-y-1">
//       <div className="flex justify-between text-xs">
//         <span>SUBTOTAL:</span>
//         <span>65.25</span>
//       </div>
//       <div className="flex justify-between text-xs">
//         <span>DISCOUNT_TOTAL:</span>
//         <span>(2.00)</span>
//       </div>
//       <div className="border-t border-dashed border-gray-600 pt-2 mt-4 flex justify-between items-baseline">
//         <span className="text-xs font-black">TOTAL_DUE:</span>
//         <span className="text-2xl font-black tracking-tighter">68.31</span>
//       </div>
//     </div>
//   )
// }

// export default Summery_Calculation

const Summery_Calculation = ({
  subtotal,
  itemDiscount,
  totalDiscount,
  setTotalDiscount,
  total
}) => {
  return (
    <div>
      <p>Subtotal: {subtotal}</p>
      <p>Item Discount: {itemDiscount}</p>

      <input
        placeholder="Total Discount"
        value={totalDiscount}
        onChange={(e) => setTotalDiscount(e.target.value)}
      />

      <h2>Total: {total}</h2>
    </div>
  )
}

export default Summery_Calculation
