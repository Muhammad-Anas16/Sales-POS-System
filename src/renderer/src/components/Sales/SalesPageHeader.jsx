const SalesPageHeader = ({ formattedDate, formattedTime }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-[#1b1c1a]">Station_01 Pharmacy</h1>
        <p className="text-xs text-gray-500">777 Digital Perforation Way</p>
      </div>

      <div className="text-right text-sm">
        <p className="font-semibold">{formattedDate}</p>
        <p className="text-gray-500">{formattedTime}</p>
      </div>
    </div>
  )
}

export default SalesPageHeader
