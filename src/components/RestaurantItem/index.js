import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ restaurant }) => {
   console.log(restaurant)
   const navigation = useNavigation()

   const rating = restaurant.rating.toFixed(1);


   const DEFAULT_IMAGE = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
    
   
   const onPress =() => {
      navigation.navigate('Restaurant', {id: restaurant.id})
      // console.warn('pressed')
   }

   return (
      <Pressable onPress={onPress} style={styles.restaurantContainer}>
         <Image
            source={{
               uri: restaurant.image.startsWith('http') ?  restaurant.image : DEFAULT_IMAGE
            }}
            style={styles.image}
         />
         <View style={styles.subcontainer}>
            <Text style={styles.title}> {restaurant.name}</Text>
            <Text style={styles.rating}>{rating}</Text>
         </View>
         <Text style={styles.subtitle}>{`$${restaurant.deliveryFee.toFixed(1)}`} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTIme} minutes</Text>
      </Pressable>

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
      width: 30,
      paddingVertical: 2,
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'lightgray',
      borderRadius: 10
   }
});
