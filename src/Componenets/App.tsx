import React, { Component, Fragment, useState } from 'react';
import './App.css'
import Product from './Product'
import Navbar from './navbar';
import Home from './gridList'
import { Button } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { checkoutForm } from './checkoutForm';


function App() {


  const [cart, setCart] = useState(0)

  const addToCart = () => {
    setCart(cart + 1)
  }

  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Navbar cartNumber={cart} />
          <Switch>
            <Route exact path="/" render={() => <Product myFunc={addToCart} />} />
            <Route path="/Home" component={Home} />
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
export default App 
