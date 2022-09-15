import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import BasketDishItem from '../../components/BasketDishItem'


import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'


const order = orders[0]
const restaurant = restaurants[0]


const OrderDetailsHeader = () => {

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

   return (
      <View style={styles.page}>
         <FlatList
            ListHeaderComponent={OrderDetailsHeader}
            data={restaurants[0].dishes}
            renderItem={({ item }) => <BasketDishItem basketDish={item} />}
         />
      </View >
   )
}
export default OrderDetails

