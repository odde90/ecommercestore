import React, { Component, Fragment, useState } from 'react';
import './App.css'
import Frontpage from './frontpage'
import Navbar from './navbar';
import TitlebarGridList from './gridList'
import { Button } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



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
            <Route exact path="/" render={() => <Frontpage myFunc={addToCart} />} />
            <Route path="/TitlebarGridList" component={TitlebarGridList} />
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
