import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getFullSales } from '../services/productService'

const OrderPage = () => {
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getFullSales()
      setOrderData(data)
    }

    fetch()
  }, [])

  console.log('Order Data: ', orderData)

  return (
    <div className="min-h-screen bg-[#f8f7f3] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Orders</h1>
          <Link to={'/'} className="text-sm bg-black text-white px-4 py-2 rounded-lg">
            Go Back
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {orderData.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No Orders Found</div>
          ) : (
            orderData.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-semibold text-lg">
                    {order.customerName || 'Walk-in Customer'}
                  </p>
                  <p className="text-sm text-gray-500">{new Date(order.date).toLocaleString()}</p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">Rs {order.total}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderPage
