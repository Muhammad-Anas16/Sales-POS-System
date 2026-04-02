import { Circle, HelpCircle, Power } from 'lucide-react'

const HomePageFooter = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12 bg-transparent flex flex-wrap items-center justify-between gap-6 px-4 pb-5 bg-[#FFFFFF] rounded-lg shadow-sm">
      {/* Left Status */}
      <div className="flex items-center gap-6">
        {/* Printer Status */}
        <div className="flex items-center gap-2">
          <Circle size={10} className="fill-green-500 text-green-500" />
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Printer: Online
          </span>
        </div>

        {/* Kitchen Display Status */}
        <div className="flex items-center gap-2">
          <Circle size={10} className="fill-green-500 text-green-500" />
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Kitchen Display: Connected
          </span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 text-on-surface-variant">
        {/* Support */}
        <button className="flex items-center gap-2 hover:text-primary transition-colors">
          <HelpCircle size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Support</span>
        </button>

        {/* Logout */}
        <button className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
          <Power size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Log Out</span>
        </button>
      </div>
    </div>
  )
}

export default HomePageFooter
