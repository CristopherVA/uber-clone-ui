import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import BasketDishItem from '../../components/BasketDishItem'
import restaurants from '../../../assets/data/restaurants.json'
import { useBasketContext } from '../../context/BasketContext'
import { useOrderContext } from '../../context/OrderContext'
import { useNavigation } from '@react-navigation/native'

const Basket = () => {

   const { basketDishes, restaurant, totalPrice } = useBasketContext()
   const { createOrder } = useOrderContext()
   const navigation = useNavigation()
   
   const onCreateOrder = async () => {
      await createOrder();
      navigation.goBack();
   }

   return (
      <View style={styles.page}>
         {/* <Ionicons name="arrow-back" size={35} color={"black"} style={styles.iconContainer} /> */}

         <Text style={styles.name}>{restaurant.name}</Text>
         <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>Your Items</Text>

         <FlatList data={basketDishes} renderItem={({ item }) => <BasketDishItem basketDish={item} />} />

         <View style={styles.separator} />

         <Pressable onPress={onCreateOrder} style={styles.button}>
            <Text style={styles.textButton}>Create Order $ {totalPrice.toFixed(2)}</Text>
         </Pressable>
      </View>
   )
}

const styles = StyleSheet.create({
   page: {
      flex: 1,
      width: '100%',
      paddingVertical: 40,
      padding: 10
   },
   name: {
      fontSize: 24,
      fontWeight: '600',
      marginVertical: 10,
   },
   row: {
      flexDirection: 'row',
      marginLeft: 10,
      alignItems: 'center',
      marginVertical: 10,

   },
   quantityContainer: {
      backgroundColor: 'lightgrey',
      paddingHorizontal: 5,
      marginRight: 5,
      paddingVertical: 2,
      borderRadius: 2
   },

   separator: {
      height: 1,
      backgroundColor: 'lightgrey',
      marginVertical: 10,

   },
   iconContainer: {
      position: 'absolute',
      top: 5,
      left: 10,
      marginTop: 10
   },

   button: {
      backgroundColor: 'black',
      marginTop: 'auto',
      padding: 20,
      alignItems: 'center'

   },
   textButton: {
      color: 'white',
      fontWeight: '600',
      fontSize: 16
   }

})

export default Basket
