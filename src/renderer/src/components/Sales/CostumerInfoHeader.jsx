import { useState } from 'react'
import { User, Phone, StickyNote } from 'lucide-react'

const CustomerInfoHeader = () => {
  const [formData, setFormData] = useState({
    name: 'Julian Thorne',
    phone: '',
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // optional (no props usage)
//   window.customerInfo = formData

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-surface-container-lowest p-5 rounded-xl shadow-[0_12px_32px_rgba(0,105,112,0.06)]">
      {/* Customer Name */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant px-1"
        >
          Customer Name
        </label>
        <div className="flex items-center bg-surface-container-low rounded-lg px-3">
          <User size={16} className="text-gray-400 mr-2" />
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-none outline-none py-2.5 text-sm"
            placeholder="Enter name"
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="space-y-1">
        <label
          htmlFor="phone"
          className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant px-1"
        >
          Phone Number
        </label>
        <div className="flex items-center bg-surface-container-low rounded-lg px-3">
          <Phone size={16} className="text-gray-400 mr-2" />
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-none outline-none py-2.5 text-sm"
            placeholder="+92 300 0000000"
          />
        </div>
      </div>

      {/* Order Notes */}
      <div className="space-y-1">
        <label
          htmlFor="notes"
          className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant px-1"
        >
          Order Notes
        </label>
        <div className="flex items-center bg-surface-container-low rounded-lg px-3">
          <StickyNote size={16} className="text-gray-400 mr-2" />
          <input
            id="notes"
            name="notes"
            type="text"
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-transparent border-none outline-none py-2.5 text-sm"
            placeholder="Add specific instructions..."
          />
        </div>
      </div>
    </section>
  )
}

export default CustomerInfoHeader
