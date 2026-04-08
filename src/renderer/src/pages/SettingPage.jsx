import SettingHeader from '../components/Setting/SettingHeader'
import SystemHardwareSection from '../components/Setting/SystemHardwareSection'

const SettingPage = () => {
  return (
    <div className="flex-1 bg-[#fbf9f5] overflow-y-auto h-screen">
      <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-8">
        <SettingHeader />

        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-6"> */}
        <div>
          <SystemHardwareSection />
        </div>
      </div>
    </div>
  )
}

export default SettingPage
