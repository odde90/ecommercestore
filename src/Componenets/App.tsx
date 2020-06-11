import React, { Component, Fragment, useState } from 'react';
import './App.css'
import Product from './Product'
import Navbar from './navbar';
import Home from './gridList'
import { Button } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { checkoutForm } from './checkoutForm';


function App() {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([] as Product[]);

  const addToCart = (product: Product) => {
    setCart(cart + 1);
    let newProducts: Product[] = cartItems;
    newProducts.push(product);
    setCartItems(newProducts);
    console.log(newProducts);
  };

  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Navbar totalitems={cartItems} />
          <Switch>

            <Route
              exact
              path="/"
              component={() => <Home addcartfun={addToCart} />}
            />
            <Route path="/product/:id" component={Productlist} />

            <Route path="/CheckoutForm" component={checkoutForm} />


          </Switch>
          {/*           <Button variant="contained" color="secondary">
            Secondary
      </Button> */}
        </BrowserRouter>
      </Fragment>
    </div>
  );
}
export default App;
