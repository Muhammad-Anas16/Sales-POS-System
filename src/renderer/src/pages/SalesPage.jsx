// import { useEffect, useState } from 'react'
// import { createSale } from '../services/productService'

// import CustomerInfoHeader from '../components/Sales/CostumerInfoHeader'
// import BillingTable from '../components/Sales/BillingTable'
// import SalesPageHeader from '../components/Sales/SalesPageHeader'
// import EntryInput from '../components/Sales/EntryInput'
// import Summery_Calculation from '../components/Sales/Summery_Calculation'
// import Print_And_Finalize from '../components/Sales/Print_And_Finalize'

// const SalesPage = () => {
//   const [time, setTime] = useState(new Date())
//   const [cart, setCart] = useState([])
//   const [customerName, setCustomerName] = useState('')
//   const [totalDiscount, setTotalDiscount] = useState(0)

//   useEffect(() => {
//     const i = setInterval(() => setTime(new Date()), 1000)
//     return () => clearInterval(i)
//   }, [])

//   const handleAddItem = (product, qty, disc, type = 'item') => {
//     if (!product) return

//     const totalItems = product.stock * product.itemsPerBox

//     const requestedItems = type === 'box' ? qty * product.itemsPerBox : qty

//     if (requestedItems > totalItems) {
//       alert('Stock limit exceeded')
//       return
//     }

//     setCart((prev) => {
//       const existing = prev.find((i) => i.productId === product.id && i.type === type)

//       if (existing) {
//         return prev.map((i) =>
//           i.productId === product.id && i.type === type
//             ? {
//                 ...i,
//                 quantity: i.quantity + qty
//               }
//             : i
//         )
//       }

//       return [
//         ...prev,
//         {
//           productId: product.id,
//           name: product.name,
//           price: product.price,
//           quantity: qty,
//           disc: disc || 0,
//           stock: totalItems,
//           type // 🔥 IMPORTANT (item or box)
//         }
//       ]
//     })
//   }

//   const updateItem = (id, field, value) => {
//     setCart((prev) =>
//       prev.map((item) => {
//         if (item.productId !== id) return item

//         if (field === 'quantity') {
//           return {
//             ...item,
//             quantity: Number(value)
//           }
//         }

//         if (field === 'disc') {
//           return {
//             ...item,
//             disc: Number(value)
//           }
//         }

//         if (field === 'price') {
//           return {
//             ...item,
//             price: Number(value)
//           }
//         }

//         return item
//       })
//     )
//   }

//   const removeItem = (id) => {
//     setCart((prev) => prev.filter((i) => i.productId !== id))
//   }

//   // 💰 calculations
//   const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0)
//   const itemDiscount = cart.reduce((s, i) => s + i.disc, 0)
//   const total = subtotal - itemDiscount - Number(totalDiscount || 0)

//   const handleFinalize = async () => {
//     if (!cart.length) return alert('Cart empty')

//     await createSale({
//       customerName: customerName || 'GUEST',
//       items: cart.map((i) => ({
//         productId: i.productId,
//         quantity: i.quantity
//       }))
//     })

//     alert('Sale Done ✅')
//     setCart([])
//     setTotalDiscount(0)
//   }

//   return (
//     <div className="p-4 flex flex-col gap-4">
//       <SalesPageHeader
//         formattedDate={time.toLocaleDateString()}
//         formattedTime={time.toLocaleTimeString()}
//       />

//       <CustomerInfoHeader setCustomerName={setCustomerName} />

//       <BillingTable items={cart} onUpdate={updateItem} onRemove={removeItem} />

//       <EntryInput onAdd={handleAddItem} />

//       <Summery_Calculation
//         subtotal={subtotal}
//         itemDiscount={itemDiscount}
//         totalDiscount={totalDiscount}
//         setTotalDiscount={setTotalDiscount}
//         total={total}
//       />

//       <Print_And_Finalize onFinalize={handleFinalize} />
//     </div>
//   )
// }

// export default SalesPage

import { useEffect, useState } from 'react'
import { createSale } from '../services/productService'

import CustomerInfoHeader from '../components/Sales/CostumerInfoHeader'
import BillingTable from '../components/Sales/BillingTable'
import SalesPageHeader from '../components/Sales/SalesPageHeader'
import EntryInput from '../components/Sales/EntryInput'
import Summery_Calculation from '../components/Sales/Summery_Calculation'
import Print_And_Finalize from '../components/Sales/Print_And_Finalize'

const SalesPage = () => {
  const [time, setTime] = useState(new Date())
  const [cart, setCart] = useState([])
  const [customerName, setCustomerName] = useState('')
  const [totalDiscount, setTotalDiscount] = useState(0)

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(i)
  }, [])

  // =========================
  // ➕ ADD ITEM (BOX + ITEM SUPPORT)
  // =========================
  const handleAddItem = (product, qty, disc, type = 'item') => {
    if (!product) return

    const totalItems = product.stock * product.itemsPerBox

    const requestedItems = type === 'box' ? qty * product.itemsPerBox : qty

    if (requestedItems > totalItems) {
      alert('Stock limit exceeded')
      return
    }

    setCart((prev) => {
      const existing = prev.find((i) => i.productId === product.id && i.type === type)

      if (existing) {
        return prev.map((i) =>
          i.productId === product.id && i.type === type
            ? {
                ...i,
                quantity: i.quantity + qty
              }
            : i
        )
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,

          // 🔥 PRICE LOGIC
          price: type === 'box' ? product.boxPrice : product.price,

          quantity: qty,
          disc: Number(disc) || 0,
          stock: totalItems,
          itemsPerBox: product.itemsPerBox,
          type // 'item' | 'box'
        }
      ]
    })
  }

  // =========================
  // ✏️ UPDATE ITEM
  // =========================
  const updateItem = (id, field, value) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.productId !== id) return item

        if (field === 'quantity') {
          return {
            ...item,
            quantity: Number(value)
          }
        }

        if (field === 'disc') {
          return {
            ...item,
            disc: Number(value)
          }
        }

        if (field === 'price') {
          return {
            ...item,
            price: Number(value)
          }
        }

        return item
      })
    )
  }

  // =========================
  // ❌ REMOVE
  // =========================
  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.productId !== id))
  }

  // =========================
  // 💰 CALCULATIONS
  // =========================
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0)
  const itemDiscount = cart.reduce((s, i) => s + i.disc, 0)

  const total = subtotal - itemDiscount - Number(totalDiscount || 0)

  // =========================
  // 🧾 FINALIZE (VERY IMPORTANT FIX)
  // =========================
  const handleFinalize = async () => {
    if (!cart.length) return alert('Cart empty')

    await createSale({
      customerName: customerName || 'GUEST',
      items: cart.map((i) => ({
        productId: i.productId,
        quantity: i.quantity,
        type: i.type, // 🔥 REQUIRED
        price: i.price // 🔥 OPTIONAL BUT IMPORTANT
      }))
    })

    alert('Sale Done ✅')
    setCart([])
    setTotalDiscount(0)
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <SalesPageHeader
        formattedDate={time.toLocaleDateString()}
        formattedTime={time.toLocaleTimeString()}
      />

      <CustomerInfoHeader setCustomerName={setCustomerName} />

      <BillingTable items={cart} onUpdate={updateItem} onRemove={removeItem} />

      <EntryInput onAdd={handleAddItem} />

      <Summery_Calculation
        subtotal={subtotal}
        itemDiscount={itemDiscount}
        totalDiscount={totalDiscount}
        setTotalDiscount={setTotalDiscount}
        total={total}
      />

      <Print_And_Finalize onFinalize={handleFinalize} />
    </div>
  )
}

export default SalesPage
