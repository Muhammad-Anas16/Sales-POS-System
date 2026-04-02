import ProductPageHeader from '../components/Product/ProductPageHeader'
import SearchProduct from '../components/Product/SearchProduct'
import ProductsTable from '../components/Product/ProductsTable'

const ProductsPage = () => {
  return (
    <div className="px-3 py-6 bg-[#fbf9f5] text-[#1b1c1a] selection:bg-[#a8d7d2] selection:text-[#325f5b] min-h-screen">
      <ProductPageHeader />
      <div className="bg-[#efeeea] rounded-xl overflow-hidden shadow-sm">
        <SearchProduct />
        <ProductsTable />
      </div>
    </div>
  )
}

export default ProductsPage
