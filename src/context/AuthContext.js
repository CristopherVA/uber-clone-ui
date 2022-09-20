import { createContext, useContext, useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {

   const [authUser, setAuthUser] = useState(null)
   const [dbUser, setDbUser] = useState(null)


   const sub = authUser?.attributes?.sub;
   console.log({ sub })

   useEffect(() => {
      Auth.currentAuthenticatedUser({ bypassCache: true }).then((res) => {
         console.log({ res })
         setAuthUser(res)
      })
   }, [])

   useEffect(() => {
      console.log("AAAAAAAAAAAAA");
      DataStore.query(User, (user) => user.sub('eq', sub)).then((users) => {
         console.log({ users: users[0] })
         setDbUser(users[0])
      })
   }, [sub])

   return (
      <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext)