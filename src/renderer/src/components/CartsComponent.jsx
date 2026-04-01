import { useState } from 'react'
import Cart from './ui/Cart'
import SalesCard from './ui/SalesCard'
import { ReceiptText, Package, BarChart3, Settings } from 'lucide-react'

const CartsComponent = () => {
  const [salesData] = useState([
    {
      id: 1,
      icon: ReceiptText,
      iconColor: '#325f5b',
      iconBackground: '#A8D7D2',
      Background: '#FEFBF9',
      title: 'Orders',
      subTitleColor: '#4e4541',
      subTitle: 'Manage queue',
      bottomColor: '#396662',
      bottomDotColor: '#A8D7D2',
      bottomTitle: '12 ACTIVE'
    },
    {
      id: 2,
      icon: Package,
      iconColor: '#4B5D41',
      iconBackground: '#C0D5B1',
      Background: '#FEFBF9',
      title: 'Products',
      subTitleColor: '#4e4541',
      subTitle: 'Inventory & Menu',
      bottomColor: '#396662',
      bottomDotColor: '#A8D7D2',
      bottomTitle: '12 Item Low Stock'
    },
    {
      id: 3,
      icon: BarChart3,
      iconColor: '#A8D7D2',
      iconBackground: '#5F8882',
      Background: '#4B736E',
      title: 'Reports',
      subTitleColor: '#A8D7D2',
      subTitle: 'Insights & Analytics',
      bottomColor: null,
      bottomDotColor: null,
      bottomTitle: null
    },
    {
      id: 4,
      icon: Settings,
      iconColor: '#325f5b',
      iconBackground: '#A8D7D2',
      Background: '#FEFBF9',
      title: 'Orders',
      subTitleColor: '#4e4541',
      subTitle: 'Manage queue',
      bottomColor: '#396662',
      bottomDotColor: '#A8D7D2',
      bottomTitle: '12 ACTIVE'
    }
  ])

  console.log('Sales Data:', salesData)

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <SalesCard />
      {/* <Cart /> */}
      {salesData.map((item) => (
        <Cart
          key={item.id}
          icon={item.icon}
          iconColor={item.iconColor}
          iconBackground={item.iconBackground}
          Background={item.Background}
          title={item.title}
          subTitle={item.subTitle}
          subTitleColor={item.subTitleColor}
          bottomColor={item.bottomColor}
          bottomDotColor={item.bottomDotColor}
          bottomTitle={item.bottomTitle}
        />
      ))}
    </div>
  )
}

export default CartsComponent
