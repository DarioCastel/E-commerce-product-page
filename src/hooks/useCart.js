import { useContext } from "react";
import { CartContext } from "../context/contentCart";

export const useCart= ()=>{
    const context=useContext(CartContext)
    return(
        context
    )
}