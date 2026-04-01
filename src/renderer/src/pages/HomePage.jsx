import CartsComponent from '../components/CartsComponent'
import Headers from '../components/Header'
const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-[#F4E7DF] font-body">
      <Headers />
      <main className="pt-20 px-8 pb-12">
        <CartsComponent />
      </main>
    </div>
  )
}

export default HomePage
