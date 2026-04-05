import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'

const SearchProduct = () => {
  return (
    <div className="px-6 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg flex-1">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-[#eae8e4] rounded-lg">
          <SlidersHorizontal size={16} /> Filter
        </button>

        <button className="px-4 py-2 bg-[#eae8e4] rounded-lg">
          <ArrowUpDown size={16} /> Sort
        </button>
      </div>
    </div>
  )
}

export default SearchProduct