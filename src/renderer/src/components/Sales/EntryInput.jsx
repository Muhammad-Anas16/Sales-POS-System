import { useState, useEffect } from 'react'
import { searchProducts } from '../../services/productService'

const EntryInput = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1)
  const [disc, setDisc] = useState(0)
  const [type, setType] = useState('item') // 🔥
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      if (!name) return setResults([])
      const data = await searchProducts(name)
      setResults(data)
    }
    fetch()
  }, [name])

  const selectProduct = (p) => {
    setSelected(p)
    setName(p.name)
    setResults([])
  }

  const handleAdd = () => {
    if (!selected) return alert('Select product')

    onAdd(selected, Number(qty), Number(disc), type)

    setName('')
    setQty(1)
    setDisc(0)
    setSelected(null)
  }

  return (
    <div className="relative flex flex-wrap gap-2 items-center">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search product..."
        className="border rounded-lg px-3 py-2 w-64"
      />

      {results.length > 0 && (
        <div className="absolute top-12 bg-white border rounded-lg w-64 shadow z-10">
          {results.map((p) => (
            <div
              key={p.id}
              onClick={() => selectProduct(p)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {p.name}
            </div>
          ))}
        </div>
      )}

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="item">Item</option>
        <option value="box">Box</option>
      </select>

      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="border rounded-lg px-3 py-2 w-20"
        placeholder="Qty"
      />

      <input
        type="number"
        value={disc}
        onChange={(e) => setDisc(e.target.value)}
        className="border rounded-lg px-3 py-2 w-20"
        placeholder="Disc"
      />

      <button onClick={handleAdd} className="bg-black text-white px-5 py-2 rounded-lg">
        Add
      </button>
    </div>
  )
}

export default EntryInput
