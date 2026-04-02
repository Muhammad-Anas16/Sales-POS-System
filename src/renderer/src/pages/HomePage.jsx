import CartsComponent from '../components/CartsComponent'
import Headers from '../components/Header'
// import HomePageFooter from '../components/ui/HomePageFooter'
const HomePage = () => {
  return (
    <div className="bg-[#F4E7DF] font-body overflow-x-hidden">
      <Headers />
      <main className="px-8 py-10 bg-[#F4E7DF] h-full w-full flex flex-col items-center justify-start gap-8">
        <CartsComponent />
        {/* <HomePageFooter /> */}
      </main>
    </div>
  )
}

export default HomePage

