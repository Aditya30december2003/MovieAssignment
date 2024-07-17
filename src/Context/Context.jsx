import { createContext , useReducer, useStat , useContext } from "react";
import GetData from '../helpers/getData'
import { cartReducer } from "./Reducer";
const Cart = createContext();



const Context = ({children , prop})=>{
  let data = GetData(prop)
  console.log(data)
 
  const [state , dispatch] = useReducer(cartReducer , {
    data : data,
    cart : []
  })

   return <Cart.Provider value={{state , dispatch}}>
   {children}
   </Cart.Provider>
}



export const CartState = () => {
    return useContext(Cart);
  };
  
export default Context;