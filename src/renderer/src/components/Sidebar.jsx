import { useState } from 'react'
import {
  Home,
  ShoppingCart,
  ReceiptText,
  Package,
  BarChart3,
  Settings,
  Plus,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react'

const menuItems = [
  { id: 1, label: 'Home', icon: Home },
  { id: 2, label: 'Sales', icon: ShoppingCart },
  { id: 3, label: 'Orders', icon: ReceiptText },
  { id: 4, label: 'Products', icon: Package },
  { id: 5, label: 'Reports', icon: BarChart3 },
  { id: 6, label: 'Settings', icon: Settings }
]

const Sidebar = () => {
  const [active, setActive] = useState(4)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`h-screen bg-[#F5F1ED] border-r flex flex-col transition-all duration-300
        ${collapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div>
            <h1 className="font-bold text-[#2F4F4F]">Atelier Admin</h1>
            <p className="text-xs text-gray-500">Barista Mode</p>
          </div>
        )}

        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 px-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all
                ${isActive ? 'bg-[#F29B7F] text-black' : 'text-gray-600 hover:bg-gray-200'}
                ${collapsed ? 'justify-center' : ''}
              `}
            >
              <Icon size={20} />

              {/* Hide text when collapsed */}
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </button>
          )
        })}
      </nav>

      {/* Bottom Button */}
      <div className="mt-auto p-4">
        <button
          className={`w-full flex items-center justify-center gap-2 bg-[#3E6B65] text-white py-3 rounded-xl shadow-md
            ${collapsed ? 'px-0' : ''}`}
        >
          <Plus size={18} />
          {!collapsed && <span className="text-sm font-medium">New Order</span>}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
