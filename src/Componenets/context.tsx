import React, { createContext, useState, PropsWithChildren } from "react";
import { Product } from "../productdata";
import { getThemeProps } from "@material-ui/styles";


type Props = PropsWithChildren<{}>;

interface ContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  getTotalAmount: () => number;
  removeFromCart: ()=>void
}

export const CartContext = createContext<ContextProps>({
  cartItems: [],
  addToCart: (product: Product) => {},
  getTotalAmount: () => 1337,
  removeFromCart: ()=>{}
});

export function CartProvider(props: Props) {
  const [cartItems, setCartItems] = useState([] as Product[]);

  const addToCart = (product: Product) => {
    let clonedCartItems: Product[] = Object.assign([], cartItems);
    clonedCartItems.push(product);
    setCartItems(clonedCartItems);
  };

  const removeFromCart = () => {
    let clonedCartItems: Product[] = Object.assign([]);
   
    setCartItems(clonedCartItems);
  };

  const getTotalAmount = () => {
    let sum = 0;
    for (const product of cartItems) {
      sum += product.price;
    }
    return sum;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getTotalAmount,
        removeFromCart
      }}

    >
      {props.children}
    </CartContext.Provider>
  );
}




