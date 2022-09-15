import React from 'react'
import { FlatList, Text, View, Pressable } from 'react-native'

// Data
import orders from '../../../assets/data/orders.json'

//Component
import OrderListItem from '../../components/OrderListItem'

const OrderScreen = () => {
   return (
      <View
         style={{flex: 1, width: '100%'}}
      >  
         <FlatList data={orders} renderItem={({ item }) => <OrderListItem order={item} />} />
      </View>
   )
}

export default OrderScreen
