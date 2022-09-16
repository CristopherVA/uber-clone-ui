import React from 'react'
import {  View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'


const RestaurantDetailsScreen = ({restaurant}) => {
   const navigation = useNavigation();
   return (
      <View style={styles.page}>
         <Image
            style={styles.image}
            source={{
               uri: restaurant.image
            }}
            resizeMode='cover'
         />


         <Ionicons onPress={() => navigation.goBack()} name="arrow-back-circle" size={45} color={"white"} style={styles.iconContainer} />

         <View style={styles.content}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>{`$${restaurant.deliveryFee.toFixed(1)}`} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes</Text>
            <Text style={styles.menuTitle}>Menu</Text>
         </View>

      </View >
   )
}

export default RestaurantDetailsScreen



