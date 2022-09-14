import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OrderScreen';
import OrderDetails from './src/screens/OrderDetails';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <HomeScreen /> */}
        {/* <RestaurantDetailsScreen /> */}
        {/* <DishDetailsScreen /> */}
        {/* <Basket /> */}
        {/* <OrderScreen /> */}
        <OrderDetails />
        <StatusBar style="light" />
      </View >
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
