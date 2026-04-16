const Print_And_Finalize = ({ onFinalize }) => {
  return (
    <button
      onClick={onFinalize}
      className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90"
    >
      Finalize Sale
    </button>
  )
}

export default Print_And_Finalize
