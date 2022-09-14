import React from 'react'
import { View, FlatList } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import DistListItem from '../../components/DishListItem'
import Header from './Header'
import styles from './styles'

const RestaurantDetailsScreen = () => {

   const restaurant = restaurants[0]

   return (
      <View style={styles.page}>
         <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant} />}
            data={restaurant.dishes}
            renderItem={({ item }) => <DistListItem dish={item} />}
         />
      </View >
   )
}
export default RestaurantDetailsScreen

