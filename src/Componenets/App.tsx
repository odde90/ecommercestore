
import React, { Component, Fragment, useState } from "react";
import "./App.css";
import Productlist from "./Product";
import Navbar from "./navbar";
import Home from "./gridList";
import { Button } from "@material-ui/core";
import { products, Product } from "../productdata";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context";
import { checkoutForm } from './checkoutForm';
import { adminPage } from './adminPage';
import Receipt from './receipt';




function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>

          <CartProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/product/:id" component={Productlist} />
              <Route path="/CheckoutForm" component={checkoutForm} />
              <Route path="/Admin" component={adminPage} />
              <Route path="/Receipt" component={Receipt} />
            </Switch>
          
          </CartProvider>

        </BrowserRouter>
      </Fragment>
    </div>
  );

}
export default App 