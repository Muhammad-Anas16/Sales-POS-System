import { Wifi, WifiOff, Clock } from 'lucide-react'

function Versions() {
  const isOnline = true

  return (
    <header className="fixed bg-[#FFFFFF] flex justify-between items-center px-8 h-16 w-full border-b border-outline-variant/30 z-10">
      <div className="flex items-center gap-4">
        <span className="text-[#396662] font-bold italic text-lg tracking-tight">
          The Tactile Atelier
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-500">
          <Clock className="text-[#396662] font-bold size-3.5" />
          <span>08:42 AM</span>
        </div>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="text-[#396662] font-bold size-5" />
          ) : (
            <WifiOff className="text-[#396662] font-bold size-5" />
          )}
        </div>
      </div>
    </header>
  )
}

export default Versions
