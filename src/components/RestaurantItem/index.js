import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';



const RestaurantItem = ({ restaurants }) => {

   const { image, name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating
   } = restaurants

   return (
      <View style={styles.restaurantContainer}>
         <Image
            source={{
               uri: image
            }}
            style={styles.image}
         />


         <View style={styles.subcontainer}>
            <Text style={styles.title}> {name}</Text>
            <Text style={styles.rating}>{rating}</Text>
         </View>
         <Text style={styles.subtitle}>{`$${deliveryFee}`} &#8226; {minDeliveryTime} - {maxDeliveryTime} minutes</Text>
      </View>

   )
}

export default RestaurantItem

const styles = StyleSheet.create({
   restaurantContainer: {
      width: '100%',
      marginVertical: 10,
   },
   image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: 5
   },
   subcontainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 5,
   },
   subtitle: {
      color: 'gray',
   },
   rating: {
      width: 38,
      paddingVertical: 2,
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'lightgray',
      borderRadius: 10
   }
});
