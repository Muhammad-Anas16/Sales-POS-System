// import { DollarSign, TrendingUp } from 'lucide-react'

// const TotalRevenueCard = () => {
//   return (
//     <div className="md:col-span-2 bg-gradient-to-br from-[#396662] to-[#325f5b] p-8 rounded-[2rem] text-white shadow-[0_20px_50px_rgba(57,102,98,0.15)] flex flex-col justify-between min-h-[220px]">
//       <div className="flex justify-between items-start">
//         <div>
//           <p className="text-[#bcece6]/80 font-medium text-sm uppercase tracking-widest mb-1">
//             Total Revenue
//           </p>
//           <h2 className="text-5xl font-bold tracking-tighter">$4,280.50</h2>
//         </div>

//         <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
//           <DollarSign size={28} />
//         </div>
//       </div>

//       <div className="flex items-center gap-2 mt-4 text-[#bcece6]">
//         <TrendingUp size={18} />
//         <span className="font-bold">+12.5%</span>
//         <span className="text-xs opacity-70 italic">vs yesterday</span>
//       </div>
//     </div>
//   )
// }

// export default TotalRevenueCard

const TotalRevenueCard = ({ data = [] }) => {
  const totalRevenue = data.reduce((sum, i) => sum + (i.total || 0), 0)

  const today = data[0]?.total || 0
  const yesterday = data[1]?.total || 0

  const percent = yesterday > 0 ? (((today - yesterday) / yesterday) * 100).toFixed(1) : 0

  return (
    <div className="md:col-span-2 bg-gradient-to-br from-[#396662] to-[#325f5b] p-8 rounded-[2rem] text-white shadow-[0_20px_50px_rgba(57,102,98,0.15)] flex flex-col justify-between min-h-[220px]">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#bcece6]/80 text-sm uppercase tracking-widest mb-1">Total Revenue</p>

          <h2 className="text-5xl font-bold">${totalRevenue.toFixed(2)}</h2>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 text-[#bcece6]">
        <span className="font-bold">{percent}%</span>
        <span className="text-xs opacity-70">vs yesterday</span>
      </div>
    </div>
  )
}

export default TotalRevenueCard
