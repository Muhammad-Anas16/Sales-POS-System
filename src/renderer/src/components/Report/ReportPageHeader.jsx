import { CalendarDays, ChevronRight, ChevronDown } from 'lucide-react'

const ReportPageHeader = () => {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })

  return (
    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <nav className="flex items-center gap-2 text-[#4e4541] text-xs uppercase tracking-widest mb-2">
          <span>Analytics</span>
          <ChevronRight size={12} />
          <span className="text-[#396662] font-bold">Reports</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-[#4e4541] tracking-tight">Daily Performance</h1>

        <p className="text-[#4e4541] mt-2 max-w-md">
          Real-time overview of your performance, revenue and flow.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-[#f5f3ef] flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#4e4541] hover:bg-[#efeeea] transition-colors cursor-pointer">
          <CalendarDays size={18} />
          <span>{formattedDate}</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </header>
  )
}

export default ReportPageHeader
