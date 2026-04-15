// import BarChartComponent from '../components/Chart/BarChartComponent'
// import ReportPageHeader from '../components/Report/ReportPageHeader'
// import TotalRevenueCard from '../components/Report/TotalRevenueCart'
// import ReportCard from './../components/Report/ReportCard'

// const ReportPage = () => {
//   return (
//     <div className="px-3 py-6 bg-[#FBF9F5] text-[#1b1c1a] min-h-screen">
//       <ReportPageHeader />
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <TotalRevenueCard />
//         <ReportCard />
//       </div>
//       <BarChartComponent />
//     </div>
//   )
// }

// export default ReportPage

import { useEffect, useState } from 'react'
import BarChartComponent from '../components/Chart/BarChartComponent'
import ReportPageHeader from '../components/Report/ReportPageHeader'
import TotalRevenueCard from '../components/Report/TotalRevenueCart'
import ReportCard from '../components/Report/ReportCard'
import { getSalesReport } from '../services/reportService'

const ReportPage = () => {
  const [reportData, setReportData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSalesReport()
      setReportData(data)
    }

    fetchData()
  }, [])

  return (
    <div className="px-3 py-6 bg-[#FBF9F5] text-[#1b1c1a] min-h-screen">
      <ReportPageHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <TotalRevenueCard data={reportData} />
        <ReportCard data={reportData} />
      </div>

      <BarChartComponent data={reportData} />
    </div>
  )
}

export default ReportPage
