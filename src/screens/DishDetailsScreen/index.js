import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import { DataStore } from 'aws-amplify'
import { Dish } from '../../models'


const DishDetailsScreen = () => {

   const [dish, setDish] = useState(null)
   const [quantity, setQuantity] = useState(1)
   const navigation = useNavigation()
   const router = useRoute()
   const id = router.params?.id;

   const onMinus = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1)
      }
   }

   const onPLus = () => {
      setQuantity(quantity + 1)
   }

   const getTotal = () => {
      return dish.price * quantity
   }

   useEffect(() => {
      if (id) {
         DataStore.query(Dish, id).then(setDish)
      }
   }, [id])


   if (!dish) {
      return <ActivityIndicator size={"large"} />
   }

   return (
      <View style={styles.page}>
         <Text style={styles.name}>{dish.name}</Text>
         <Text style={styles.description}>{dish.description}</Text>
         <View style={styles.separator} />

         <View style={styles.row}>
            <AntDesign onPress={() => onMinus()} style={styles.icon} name='minuscircleo' size={60} color="black" />
            <Text style={styles.quantity}>{quantity}</Text>
            <AntDesign onPress={() => onPLus()} style={styles.icon} name='pluscircleo' size={60} color="black" />
         </View>

         <Pressable onPress={() => navigation.navigate("Basket")} style={styles.button}>
            <Text style={styles.textButton}>Add ${quantity} items to basket &#8226; (${getTotal().toFixed(2)})</Text>

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
      fontSize: 30,
      fontWeight: '600',
      marginVertical: 10,
   },
   description: {
      color: 'grey',
      marginBottom: 10
   },
   separator: {
      height: 1,
      backgroundColor: 'lightgrey',
      marginVertical: 10,

   },
   row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50
   },
   quantity: {
      fontSize: 20,
      fontWeight: 'bold',
      marginHorizontal: 20
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

export default DishDetailsScreen
