import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const BasketDishItem = ({ basketDish }) => {
   console.log("aaaaaaaaaa");

   console.log({ basketDish });

   return (
      <View style={styles.row} >
         <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>{basketDish.quantity}</Text>
         </View>

         <Text style={{ fontWeight: '600' }}>{basketDish.Dish.name}</Text>
         <Text style={{ marginLeft: 'auto' }}>${basketDish.Dish.price}</Text>
      </View >
   )
}

export default BasketDishItem

const styles = StyleSheet.create({
   row: {
      flexDirection: 'row',
      marginLeft: 10,
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 10

   },
   quantityContainer: {
      backgroundColor: 'lightgrey',
      paddingHorizontal: 5,
      marginRight: 5,
      paddingVertical: 2,
      borderRadius: 2
   },

})
