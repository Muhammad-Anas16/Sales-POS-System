// import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

// const data = [
//   { name: 'Page A', uv: 400 },
//   { name: 'Page B', uv: 300 },
//   { name: 'Page C', uv: 300 },
//   { name: 'Page D', uv: 200 },
//   { name: 'Page E', uv: 278 },
//   { name: 'Page F', uv: 189 }
// ]

// const BarChartComponent = () => {
//   return (
//     <div className="bg-[#fbf9f5] p-6 rounded-2xl shadow-sm w-full h-[350px]">
//       {/* Title */}
//       <h2 className="text-lg font-semibold text-[#2d2a26] mb-4">Sales Overview</h2>

//       {/* Chart */}
//       <ResponsiveContainer width="100%" height="85%">
//         <BarChart data={data}>
//           <XAxis
//             dataKey="name"
//             tick={{ fill: '#7f7571', fontSize: 12 }}
//             axisLine={false}
//             tickLine={false}
//           />

//           <YAxis tick={{ fill: '#7f7571', fontSize: 12 }} axisLine={false} tickLine={false} />

//           <Tooltip
//             contentStyle={{
//               backgroundColor: '#fff',
//               borderRadius: '10px',
//               border: 'none',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//             }}
//           />

//           <Bar
//             dataKey="uv"
//             fill="#396662"
//             radius={[8, 8, 0, 0]} // rounded bars (important)
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

// export default BarChartComponent

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const BarChartComponent = ({ data = [] }) => {
  const chartData = data.map((item) => ({
    name: item.date?.slice(0, 10),
    uv: item.total
  }))

  return (
    <div className="bg-[#fbf9f5] p-6 rounded-2xl shadow-sm w-full h-[350px]">
      <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <Bar dataKey="uv" fill="#396662" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent
