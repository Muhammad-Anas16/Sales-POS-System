import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F4E7DF]">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
