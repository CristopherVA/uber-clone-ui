import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, FlatList, Pressable, Text } from 'react-native'
import DistListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './styles'

import { DataStore } from 'aws-amplify'
import { ActivityIndicator } from 'react-native-paper'
import { Restaurant } from '../../models'
import { Dish } from '../../models'
import { useBasketContext } from '../../context/BasketContext'

const RestaurantDetailsScreen = () => {

   const [restaurant, setRestaurant] = useState(null)
   const [dishes, setDishes] = useState([])

   const { setRestaurant: setBastkeRestaurant, basket, basketDishes } = useBasketContext()

   const navigation = useNavigation();
   const router = useRoute();
   console.log(restaurant)
   const id = router.params?.id;

   useEffect(() => {

      if (!id) {
         return;
      }

      setBastkeRestaurant(null)

      // Fetch restaurant with id
      DataStore.query(Restaurant, id).then(setRestaurant);
      DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes)

   }, [id])

   useEffect(() => {
      setBastkeRestaurant(restaurant)
   }, [restaurant])

   if (!restaurant) {
      return (<ActivityIndicator style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} size={"large"} />)
   }

   return (
      <View style={styles.page}>
         <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant} />}
            data={dishes}
            renderItem={({ item }) => <DistListItem dish={item} />}
            keyExtractor={(item) => item.name}
         />


         {basket && (
            <Pressable
               onPress={() => navigation.navigate("Basket")}
               style={styles.button}
            >
               <Text style={styles.buttonText}>Open Basket ({basketDishes.length})</Text>
            </Pressable>
         )}
      </View >
   )
}
export default RestaurantDetailsScreen

