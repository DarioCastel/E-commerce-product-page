import { createContext } from "react";

export const CartContext = createContext();

const addToCart = () => {
  console.log("agrego al carrito")
};
const removeCart = () => {};

export function CartProvider({ children }) {
  return (
    <CartContext.Provider value={{ addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
}
