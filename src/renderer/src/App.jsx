// import SalesCard from './components/ui/SalesCard'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import ProductsPage from './pages/ProductsPage'
import ReportPage from './pages/ReportPage'
import SalesPage from './pages/SalesPage'
import SettingPage from './pages/SettingPage'
import DashboardLayout from './components/DashboardLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
