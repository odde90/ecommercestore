import React, { Component } from "react";
import "./App.css";
import Frontpage from "./frontpage";
import NavbarScroller from "./navbar";
import TitlebarGridList from "./gridList";
import { Button } from "@material-ui/core";
import Footer from "./footer";

const navigation = {
  brand: { name: "eShop.se", to: "/" },
  links: [
    { name: "Checkout", to: "/" },
    { name: "Cart", to: "/" }
  ]
};

export default class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavbarScroller brand={brand} links={links} />
        <div className="hello">
          <Frontpage />
          <TitlebarGridList />
          {/*           <Button variant="contained" color="secondary">
            Secondary
          </Button> */}
          <Footer />
        </div>
      </div>
    );
  }
}
