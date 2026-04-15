// const Print_And_Finalize = () => {
//   const handlePrint = () => {
//     console.log('Print & Finalize')
//     // window.print()  // enable later
//   }

//   const handleSave = () => {
//     console.log('Saved without printing')
//   }

//   const handleCash = () => {
//     console.log('Cash transaction (no bill)')
//   }

//   return (
//     <div className="mt-4 space-y-2">
//       {/* Main Action */}
//       <button
//         onClick={handlePrint}
//         className="w-full py-4 text-white border-2 border-[#35625E] bg-[#396662] font-black text-xs uppercase tracking-widest hover:bg-[#325f5b] transition-colors cursor-pointer"
//       >
//         [ F12 ] PRINT_AND_FINALIZE
//       </button>

//       {/* Secondary Actions */}
//       <div className="grid grid-cols-2 gap-2">
//         <button
//           onClick={handleSave}
//           className="py-3 border border-[#35625E] text-[10px] font-bold uppercase tracking-wide hover:bg-[#325f5b] hover:text-white transition-colors cursor-pointer"
//         >
//           [ F9 ] SAVE_ONLY
//         </button>

//         <button
//           onClick={handleCash}
//           className="py-3 border border-[#35625E] text-[10px] font-bold uppercase tracking-wide hover:bg-[#325f5b] hover:text-white transition-colors cursor-pointer"
//         >
//           [ F10 ] CASH_CLOSE
//         </button>
//       </div>

//       {/* Hint */}
//       <p className="text-[8px] text-center opacity-50 uppercase">
//         PRINT RECEIPT OR SAVE TRANSACTION BASED ON CUSTOMER NEED
//       </p>
//     </div>
//   )
// }

// export default Print_And_Finalize

const Print_And_Finalize = ({ onFinalize }) => {
  return <button onClick={onFinalize}>FINALIZE</button>
}

export default Print_And_Finalize
