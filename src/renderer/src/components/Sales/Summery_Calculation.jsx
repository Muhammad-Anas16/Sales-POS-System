// const Summery_Calculation = ({
//   subtotal,
//   itemDiscount,
//   totalDiscount,
//   setTotalDiscount,
//   total
// }) => {
//   return (

//     <div className="space-y-3 text-sm">
//       <div className="flex justify-between">
//         <span>Subtotal</span>
//         <span>{subtotal}</span>
//       </div>

//       <div className="flex justify-between">
//         <span>Item Discount</span>
//         <span>{itemDiscount}</span>
//       </div>

//       <div>
//         <input
//           placeholder="Extra Discount"
//           value={totalDiscount}
//           onChange={(e) => setTotalDiscount(e.target.value)}
//           className="w-full border rounded-lg px-3 py-2"
//         />
//       </div>

//       <div className="flex justify-between text-lg font-bold pt-2 border-t">
//         <span>Total</span>
//         <span>{total}</span>
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
  // 🔥 Convert % → actual amount
  const percent = Number(totalDiscount) || 0
  const percentAmount = (subtotal * percent) / 100

  // 🔥 Final total with %
  const finalTotal = subtotal - itemDiscount - percentAmount

  return (
    <div className="space-y-3 text-sm">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{subtotal}</span>
      </div>

      <div className="flex justify-between">
        <span>Item Discount</span>
        <span>{itemDiscount}</span>
      </div>

      {/* INPUT = % */}
      <div>
        <input
          type="number"
          placeholder="Discount %"
          value={totalDiscount}
          onChange={(e) => setTotalDiscount(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* SHOW CALCULATED DISCOUNT */}
      <div className="flex justify-between text-gray-500">
        <span>Extra Discount ({percent}%)</span>
        <span>- {percentAmount.toFixed(2)}</span>
      </div>

      {/* FINAL TOTAL */}
      <div className="flex justify-between text-lg font-bold pt-2 border-t">
        <span>Total</span>
        <span>{finalTotal.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Summery_Calculation
