const CustomerInfoHeader = ({ setCustomerName }) => {
  return (
    <div>
      <label className="text-sm text-gray-600">Customer Name</label>
      <input
        type="text"
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter customer name..."
        className="w-full mt-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  )
}

export default CustomerInfoHeader
