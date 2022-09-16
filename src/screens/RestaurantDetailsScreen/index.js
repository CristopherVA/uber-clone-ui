import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, FlatList } from 'react-native'
import DistListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './styles'

import { DataStore } from 'aws-amplify'
import { ActivityIndicator } from 'react-native-paper'
import { Restaurant } from '../../models'
import { Dish } from '../../models'

const RestaurantDetailsScreen = () => {

   const [restaurant, setRestaurant] = useState(null)
   const [dishes, setDishes] = useState([])

   const navigation = useNavigation();
   const router = useRoute();
   console.log(restaurant)
   const id = router.params?.id;

   useEffect(() => {
      if (id) {
         DataStore.query(Restaurant, id).then(setRestaurant);
         DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes)
      }

   }, [id])

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
      </View >
   )
}
export default RestaurantDetailsScreen

