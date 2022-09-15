import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, FlatList } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import DistListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './styles'

const RestaurantDetailsScreen = () => {

   const router = useRoute()

   const id = router.params?.id;
   const restaurant = restaurants[0]

   return (
      <View style={styles.page}>
         <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant} />}
            data={restaurant.dishes}
            renderItem={({ item }) => <DistListItem dish={item} />}
            keyExtractor={(item) => item.name}
         />
      </View >
   )
}
export default RestaurantDetailsScreen

