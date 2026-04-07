import SalesSearchBar from '../components/Sales/SalesSearchBar'
import CustomerInfoHeader from '../components/Sales/CostumerInfoHeader'
import BillingTable from '../components/Sales/BillingTable'
import BillingSidebar from '../components/Sales/BillingSidebar'

const SalesPage = () => {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#f8f9fa] overflow-hidden p-4 gap-4">
      {/* Top Section */}
      <SalesSearchBar />
      <CustomerInfoHeader />

      {/* Bottom Section */}
      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Left: Billing Table */}
        <div className="flex-1 min-w-0">
          <BillingTable />
        </div>

        {/* Right: Sidebar */}
        <BillingSidebar />
      </div>
    </div>
  )
}

export default SalesPage
