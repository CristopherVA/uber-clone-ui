import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, StyleSheet, Pressable } from 'react-native'

const DistListItem = ({ dish }) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate("Dish", {id: dish.id})} style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image
          source={{
            uri: dish.image
          }}
          style={styles.image}
        />
      )}
    </Pressable>
  )
}

export default DistListItem

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    paddingBottom: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5
  },
  description: {
    color: 'gray',
    marginVertical: 1
  },
  price: {
    fontSize: 16
  },
  image: {
    height: 75,
    aspectRatio: 1
  }
})
