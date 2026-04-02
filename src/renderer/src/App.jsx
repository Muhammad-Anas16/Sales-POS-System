// import SalesCard from './components/ui/SalesCard'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import ProductsPage from './pages/ProductsPage'
import ReportPage from './pages/ReportPage'
import SalesPage from './pages/SalesPage'
import SettingPage from './pages/SettingPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </div>
  )
}

export default App
