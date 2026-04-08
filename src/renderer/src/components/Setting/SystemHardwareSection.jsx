import { useState } from 'react'
import SettingItem from './SettingItem'
import {
  Server,
  Wifi,
  Clock,
  Printer,
  Palette,
  Sun,
  Moon
  // Check
} from 'lucide-react'

const SystemHardwareSection = () => {
  const [wifi, setWifi] = useState(true)
  const [timezone, setTimezone] = useState(true)
  const [theme, setTheme] = useState('light')
  // const [accent, setAccent] = useState('#396662')

  return (
    <section className="lg:col-span-8 space-y-6">
      {/* System & Connection */}
      <div className="bg-[#efeeea] rounded-xl p-8 custom-shadow">
        <div className="flex items-center gap-3 mb-8">
          <Server className="text-[#396662]" size={20} />
          <h3 className="text-xl font-bold">System & Connection</h3>
        </div>

        <div className="space-y-4">
          <SettingItem
            icon={Wifi}
            title="Wi-Fi Connection"
            description='Connected to "Atelier_Guest_Pro"'
            toggle={wifi}
            onToggle={setWifi}
          />

          <SettingItem
            icon={Clock}
            title="Automatic Timezone"
            description="GMT +2 (Copenhagen)"
            toggle={timezone}
            onToggle={setTimezone}
          />

          <SettingItem
            icon={Printer}
            title="Receipt Printer"
            description="Epson TM-T88VI (Ready)"
            action="Manage"
          />
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-[#efeeea] rounded-xl p-8 custom-shadow">
        <div className="flex items-center gap-3 mb-8">
          <Palette className="text-[#396662]" size={20} />
          <h3 className="text-xl font-bold">Appearance</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Display Mode */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-outline uppercase tracking-wider">
              Display Mode
            </label>

            <div className="flex gap-2 p-1 bg-[#efeeea] rounded-xl">
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold cursor-pointer flex items-center justify-center gap-2 ${
                  theme === 'light' ? 'bg-[#ffffff] shadow-sm' : 'text-[#4e4541] hover:bg-[#eae8e4]'
                }`}
              >
                <Sun size={16} />
                Light
              </button>

              <button
                onClick={() => setTheme('dark')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold cursor-pointer flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-surface-container-lowest shadow-sm'
                    : 'text-[#4e4541] hover:bg-[#eae8e4]'
                }`}
              >
                <Moon size={16} />
                Dark
              </button>
            </div>
          </div>

          {/* Accent Colors */}
          {/* <div className="space-y-3">
            <label className="text-xs font-bold text-outline uppercase tracking-wider">
              Accent Flavor
            </label>

            <div className="flex gap-3">
              {['#396662', '#914b34', '#516447', '#ffa588'].map((color) => (
                <div
                  key={color}
                  onClick={() => setAccent(color)}
                  className={`w-10 h-10 rounded-full cursor-pointer transition-transform flex items-center justify-center ${
                    accent === color ? 'ring-4 ring-opacity-20' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: color }}
                >
                  {accent === color && <Check size={14} className="text-white" />}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default SystemHardwareSection
