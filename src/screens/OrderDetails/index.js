import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import BasketDishItem from '../../components/BasketDishItem'


import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import { useOrderContext } from '../../context/OrderContext'
import { useRoute } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native-paper'




const OrderDetailsHeader = ({ order }) => {
   return (
      <View style={styles.page}>
         <Image
            style={styles.image}
            source={{
               uri: order.Restaurant.image
            }}
            resizeMode='cover'
         />


         {/* <Ionicons name="arrow-back-circle" size={45} color={"white"} style={styles.iconContainer} /> */}

         <View style={styles.content}>
            <Text style={styles.title}>{order.Restaurant.name}</Text>
            <Text style={styles.subtitle}>{`${order.status}`} &#8226; 2 days ago</Text>
            <Text style={styles.menuTitle}>Your orders</Text>
         </View>

      </View >
   )
}

const OrderDetails = () => {

   const { getOrder } = useOrderContext()
   const [order, setOrder] = useState()
   const [orderDishItems, setOrderDishItems] = useState()
   const  route  = useRoute()
   const id = route.params?.id;

   useEffect(() => {
      getOrder(id).then(setOrder)
   }, [])

   if (!order) {
      return <ActivityIndicator size={"large"} color="gray" />
   }

   return (
      <View style={styles.page}>
         <FlatList
            ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
            data={order?.dishes}
            renderItem={({ item }) => <BasketDishItem basketDish={item} />}
         />
      </View >
   )
}
export default OrderDetails

