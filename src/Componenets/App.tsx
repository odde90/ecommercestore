
import React, { Component, Fragment, useState } from "react";
import "./App.css";
import Productlist from "./Product";
import Navbar from "./navbar";
import Home from "./gridList";
import { Button } from "@material-ui/core";
import { products, Product } from "../productdata";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context";


function App() {
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

        </BrowserRouter>
      </Fragment>
    </div>
  );
}
export default App;
