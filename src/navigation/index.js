import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name='HomeTab' component={HomeTabs} />
      </Stack.Navigator>
   )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
   return (
      <Tab.Navigator
        
         barStyle={{ backgroundColor: 'white' }}

      >
         <Tab.Screen
            name='Home'
            component={HomeStackNavigator}
            options={{
               tabBarIcon: () => <Foundation name="home" size={24} />
            }}
         />
         <Tab.Screen
            name='Orders'
            component={OrderStackNavigator}
            options={{
               tabBarIcon: () => <MaterialIcons name="list-alt" size={24} />
            }}
         />
         <Tab.Screen
            name='Profiler'
            component={ProfileScreen}
            options={{
               tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} />
            }}
         />
      </Tab.Navigator>
   )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
   return (
      <HomeStack.Navigator>
         <HomeStack.Screen name="Restaurants" component={HomeScreen} />
         <HomeStack.Screen  name="Restaurant" component={RestaurantDetailsScreen} options={{ headerShown: false }} />
         <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
         <HomeStack.Screen name="Basket" component={Basket} />
      </HomeStack.Navigator>
   )
}

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
   return (
      <HomeStack.Navigator>
         <HomeStack.Screen name="Orders" component={OrderScreen} />
         <HomeStack.Screen name="Order" component={OrderDetails} />
      </HomeStack.Navigator>
   )
}

export default RootNavigator;