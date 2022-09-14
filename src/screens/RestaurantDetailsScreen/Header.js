import React from 'react'
import {  View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles'
const RestaurantDetailsScreen = () => {

   const restaurant = restaurants[0]

   return (
      <View style={styles.page}>
         <Image
            style={styles.image}
            source={{
               uri: restaurant.image
            }}
            resizeMode='cover'
         />


         <Ionicons name="arrow-back-circle" size={45} color={"white"} style={styles.iconContainer} />

         <View style={styles.content}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>{`$${restaurant.deliveryFee}`} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes</Text>
            <Text style={styles.menuTitle}>Menu</Text>
         </View>

      </View >
   )
}

export default RestaurantDetailsScreen



