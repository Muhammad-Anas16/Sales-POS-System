import { Wifi } from 'lucide-react'

function Versions() {
  return (
    <header className="fixed bg-[#FFFFFF] flex justify-between items-center px-8 h-16 w-full">
      <div className="flex items-center gap-4">
        <span className="text-[#396662] font-bold italic text-lg tracking-tight">
          The Tactile Atelier
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-500">
          <span>08:42 AM</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="text-[#396662] font-bold size-5" />
        </div>
      </div>
    </header>
  )
}

export default Versions
