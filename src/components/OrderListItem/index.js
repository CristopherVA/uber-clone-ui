import React from 'react'
import { Image, Text, View } from 'react-native'

const OrderListItem = ({ order }) => {
  return (
    <View style={{
      flexDirection: 'row',
      margin: 10,
      alignItems: 'center'
    }}>
      <Image source={{ uri: order.Restaurant.image }} style={{width: 75, height: 75, marginRight: 5 }} />


      <View>
         <Text style={{ fontWeight: '600', fontSize: 16 }}>{order.Restaurant.name}</Text>
         <Text style={{ marginVertical: 5, color: 'grey' }}>3 Item &#8226; $38.45</Text>
         <Text style={{color: 'grey'}}>2 days ago &#8226; {order.status}</Text>

      </View>
    </View>
  )
}

export default OrderListItem
