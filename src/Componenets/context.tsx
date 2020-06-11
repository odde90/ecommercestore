import React, { createContext, useState, PropsWithChildren } from "react";
import { Product } from "../productdata";
import { getThemeProps } from "@material-ui/styles";


type Props = PropsWithChildren<{}>;

interface ContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<ContextProps>({
  cartItems: [],
  addToCart: (product: Product) => {}
});

export function CartProvider(props: Props) {
  const [cartItems, setCartItems] = useState([] as Product[]);

  const addToCart = (product: Product) => {
    let clonedCartItems: Product[] = Object.assign([], cartItems);
    clonedCartItems.push(product);
    setCartItems(clonedCartItems);
  };

  const [totalAmount, settotalAmount] = useState(100);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}




export const FormContext = createContext({
  // firstName: String,
  // lastName: String,
  // email: String,
  // phone: String,
  // adress: String,
  // price: Number
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  adress: '',
  price: 0
});
