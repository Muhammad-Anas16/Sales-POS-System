// import { useState } from 'react'

// const CustomerInfoHeader = () => {
//   const [name, setName] = useState('')

//   return (
//     <div className="py-4 border-t border-dashed border-gray-600">
//       <label className="text-[9px] text-[#35625E] font-bold block mb-1 tracking-wide">CUSTOMER_NAME:</label>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="[ ENTER NAME OR 'GUEST' ]"
//         className="w-full bg-transparent border-b border-dashed border-gray-600 text-xs py-1 px-0 outline-none uppercase placeholder:text-gray-400"
//       />
//     </div>
//   )
// }

// export default CustomerInfoHeader

const CustomerInfoHeader = ({ setCustomerName }) => {
  return (
    <div className="py-4 border-t border-dashed border-gray-600">
      <input
        type="text"
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="CUSTOMER NAME"
        className="w-full border-b text-xs py-1 outline-none"
      />
    </div>
  )
}

export default CustomerInfoHeader
