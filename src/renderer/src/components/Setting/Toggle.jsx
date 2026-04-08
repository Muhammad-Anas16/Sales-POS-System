import { useState } from 'react'

const Toggle = ({ enabled = true, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(enabled)

  const handleToggle = () => {
    const newValue = !isEnabled
    setIsEnabled(newValue)
    onChange && onChange(newValue)
  }

  return (
    <div
      onClick={handleToggle}
      className="w-14 h-8 rounded-full relative p-1 cursor-pointer transition-colors bg-[#396662]"
    >
      <div
        className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${
          isEnabled ? 'right-1' : 'left-1'
        }`}
      />
    </div>
  )
}

export default Toggle
