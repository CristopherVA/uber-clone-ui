import React from 'react'
import { FlatList, Text, View } from 'react-native'

// Data
import orders from '../../../assets/data/orders.json'

//Component
import OrderListItem from '../../components/OrderListItem'

const OrderScreen = () => {
   return (
      <View
         style={{flex: 1, width: '100%', paddingTop: 40}}
      >  
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 40}}>Order</Text>
         <FlatList data={orders} renderItem={({ item }) => <OrderListItem order={item} />} />
      </View>
   )
}

export default OrderScreen
