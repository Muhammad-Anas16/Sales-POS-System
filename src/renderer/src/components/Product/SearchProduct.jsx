import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'

const SearchProduct = () => {
  return (
    <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
      {/* Search Input */}
      <div className="flex items-center gap-3 bg-[#ffffff] px-4 py-2 rounded-lg flex-1 min-w-[280px]">
        <Search className="text-outline" size={18} />
        <input
          type="text"
          placeholder="Search products, or categories..."
          aria-label="Search products"
          className="bg-transparent outline-none text-sm w-full placeholder:text-outline"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#eae8e4] rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-[#e4e2de] transition-colors">
          <SlidersHorizontal size={16} />
          Filter
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#eae8e4] rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-[#e4e2de] transition-colors">
          <ArrowUpDown size={16} />
          Sort
        </button>
      </div>
    </div>
  )
}

export default SearchProduct
