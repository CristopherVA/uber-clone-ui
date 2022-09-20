import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";


const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {

   const { dbUser } = useAuthContext()
   const [basket, setBasket] = useState(null)
   const [restaurant, setRestaurant] = useState(null)
   const [basketDishes, setBasketDishes] = useState([])

   useEffect(() => {
      DataStore.query(Basket, b => b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id)).then(
         baskets => setBasket(baskets[0])
      )
   }, [dbUser, restaurant])

   useEffect(() => {
      DataStore.query(BasketDish, bd => bd.basketID("eq", basket.id)).then(setBasketDishes)
   }, [])

   const addDishToBasket = async (dish, quantity) => {
      // get the existing basket or create a new one
      let theBasket = basket || await createBasket()

      // create a BasketDish item and save to DataStore
      const newDish = await DataStore.save(new BasketDish({ quantity, Dish: dish, basketID: theBasket.id }))

      setBasketDishes([...basketDishes, newDish])

   }

   const createBasket = async () => {
      const newBasket = DataStore.save(new Basket({
         userID: dbUser.id, restaurantID: restaurant.id
      }))

      setBasket(newBasket)
      return newBasket;
   }

   return (
      <BasketContext.Provider
         value={{ addDishToBasket, setRestaurant, basket, basketDishes, restaurant }}
      >
         { children }
      </BasketContext.Provider>
   )
}

export default BasketContextProvider;

export const useBasketContext =  () => useContext(BasketContext)
