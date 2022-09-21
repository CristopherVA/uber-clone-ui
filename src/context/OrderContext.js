import { DataStore } from "aws-amplify";
import { createContext, useState, useEffect, useContext } from "react";
import { Order, OrderDish, Basket } from "../models";
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {

   const { dbUser } = useAuthContext()
   const { restaurant, totalPrice, basketDishes, basket } = useBasketContext()
   const [orders, setOrders] = useState([])

   useEffect(() => {
      DataStore.query(Order, (o) => o.userID("eq", dbUser.id)).then(setOrders)
   }, [dbUser])

   const createOrder = async () => {
      // CREATE ORDER
      const newOrder = await DataStore.save(new Order({
         userID: dbUser.id,
         Restaurant: restaurant,
         status: "NEW",
         total: totalPrice
      }))

      // ADD ALL BASKETDISHES TO THE ORDER
      await Promise.all(
         basketDishes.map((basketDish) =>
            DataStore.save(new OrderDish({
               quantity: basketDish.quantity,
               orderID: newOrder.id,
               Dish: basketDish.Dish
            }))
         )
      )

      // DELETE BASKET
      await DataStore.delete(basket)

      setOrders([...orders, newOrder])
   }

   const getOrder = async (id) => {
      const order = await DataStore.query(Order, id)
      const orderDishes = await DataStore.query(OrderDish, od => od.orderID("eq", id))

      return {
         ...order,
         dishes: orderDishes
      }
   }

   return (
      <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
         {children}
      </OrderContext.Provider>

   )
}

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);