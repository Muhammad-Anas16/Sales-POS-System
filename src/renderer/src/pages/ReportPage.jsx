import { Link } from 'react-router'
import ReportPageHeader from '../components/Report/ReportPageHeader'
import TotalRevenueCard from '../components/Report/TotalRevenueCart'
import ReportCard from './../components/Report/ReportCard'

const ReportPage = () => {
  return (
    <div className="px-3 py-6 bg-[#FBF9F5] text-[#1b1c1a] min-h-screen">
      <ReportPageHeader />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <TotalRevenueCard />
        <ReportCard />
      </div>
      <h1>Report Page</h1>
      <Link to={'/'}>Go Back</Link>
    </div>
  )
}

export default ReportPage
