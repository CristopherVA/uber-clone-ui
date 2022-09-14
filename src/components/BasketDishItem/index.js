import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const BasketDishItem = ({ basketDish }) => {
  return(
     <View style={styles.row} >
        <View style={styles.quantityContainer}>
           <Text style={styles.quantityTitle}>1</Text>
        </View>

        <Text style={{ fontWeight: '600' }}>{basketDish.name}</Text>
        <Text style={{ marginLeft: 'auto' }}>${basketDish.price}</Text>
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
