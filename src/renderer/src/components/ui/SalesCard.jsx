import { ShoppingCart } from 'lucide-react'

const SalesCard = () => {
  return (
    <button
      className="
        md:col-span-2
        group relative overflow-hidden
        bg-white/80 backdrop-blur-md
        p-8 rounded-3xl
        shadow-[0_12px_40px_rgba(57,102,98,0.05)]
        text-left
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer
      "
    >
      {/* Background Icon */}
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <ShoppingCart size={120} strokeWidth={1.2} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top Section */}
        <div>
          <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary-container/20">
            <ShoppingCart className="text-on-secondary-container" size={28} />
          </div>

          <h2 className="font-headline text-2xl font-bold text-on-surface mb-1">Sales</h2>

          <p className="text-on-surface-variant text-sm font-medium">
            Open Register & New Transaction
          </p>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 flex items-center gap-8">
          {/* Revenue */}
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">
              Today’s Revenue
            </span>
            <span className="block font-headline text-3xl font-extrabold text-primary">
              $2,482.50
            </span>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-outline-variant/30" />

          {/* Growth */}
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">
              Growth
            </span>
            <span className="block font-headline text-3xl font-extrabold text-tertiary">+12%</span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default SalesCard
