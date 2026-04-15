// import { Coffee } from 'lucide-react'

// const ReportCard = () => {
//   return (
//     <div className="bg-[#ffffff] p-6 rounded-[2rem] shadow-sm flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
//       <div>
//         <div className="bg-[#c0d5b1]/30 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
//           <Coffee size={22} className="text-[#516447]" />
//         </div>

//         <p className="text-[#4e4541] text-xs uppercase tracking-widest font-semibold">Null</p>
//         {/* value */}
//         <h3 className="text-3xl font-bold text-[#1b1c1a] mt-1">{0}</h3>
//       </div>

//       <div>
//         <div className="h-1.5 w-full bg-[#e0e0e0] rounded-full overflow-hidden mt-6">
//           {/* percentage */}
//           <div
//             className="h-full bg-[#516447] rounded-full transition-all duration-500"
//             style={{ width: `${0}%` }}
//           />
//         </div>
//         {/* percentage */}
//         <p className="text-[10px] text-[#4e4541] mt-2 font-medium">{0}% of daily goal reached</p>
//       </div>
//     </div>
//   )
// }

// export default ReportCard

const ReportCard = ({ data = [] }) => {
  const totalSales = data.length

  const totalRevenue = data.reduce((sum, i) => sum + (i.total || 0), 0)

  const goal = 10000
  const percent = Math.min(((totalRevenue / goal) * 100).toFixed(1), 100)

  return (
    <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest font-semibold">Daily Sales</p>

        <h3 className="text-3xl font-bold mt-1">{totalSales}</h3>
      </div>

      <div className="mt-6">
        <div className="h-1.5 w-full bg-gray-200 rounded-full">
          <div className="h-full bg-[#516447] rounded-full" style={{ width: `${percent}%` }} />
        </div>

        <p className="text-[10px] mt-2">{percent}% of daily goal reached</p>
      </div>
    </div>
  )
}

export default ReportCard
