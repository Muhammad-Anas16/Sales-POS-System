const SalesPageHeader = ({ formattedDate, formattedTime }) => {
  return (
    <div className="mt-4 text-center text-[#35625E] space-y-1">
      <h1 className="text-2xl font-black tracking-tighter uppercase">Station_01 Pharmacy</h1>
      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
        777 Digital Perforation Way, Grid City
      </p>
      <div className="flex justify-between items-end pt-4 pb-2 text-[10px] font-bold">
        <div className="text-left">
          <p>DATE : {formattedDate}</p>
          <p>TIME : {formattedTime}</p>
        </div>
      </div>
    </div>
  )
}

export default SalesPageHeader
