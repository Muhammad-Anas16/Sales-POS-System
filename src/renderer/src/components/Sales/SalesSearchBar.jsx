import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

const SalesSearchBar = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedDate = time.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const formattedTime = time.toLocaleTimeString()

  return (
    <header className="fixed top-0 md:relative w-full h-16 flex items-center justify-between px-4 md:px-6 z-50 bg-white shadow-sm">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search products (Ctrl + K)..."
            className="w-full bg-slate-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Date & Time */}
        <div className="hidden lg:flex flex-col items-end mr-2">
          <span className="text-xs font-bold text-slate-700">{formattedDate}</span>
          <span className="text-[10px] text-slate-500 tabular-nums">{formattedTime}</span>
        </div>

        {/* Checkout */}
        <button className="bg-teal-700 text-white px-4 md:px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md">
          Check Out
        </button>
      </div>
    </header>
  )
}

export default SalesSearchBar
