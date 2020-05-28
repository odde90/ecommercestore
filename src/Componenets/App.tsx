import React, { Component } from 'react';
import './App.css'
import Frontpage from './frontpage'
import NavbarScroller from './navbar';
import { Button } from '@material-ui/core';

const navigation = {
  brand: { name: 'NavScroller', to: '/' },
  links: [
    { name: 'Item 1', to: '/' },
    { name: 'Item 2', to: '/' },
    { name: 'Item 3', to: '/' },
    { name: 'Item 4', to: '/' },
    { name: 'Item 5', to: '/' },
    { name: 'Item 6', to: '/' },

  ]
};

export default class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavbarScroller brand={brand} links={links} />
        <div className="hello">
          <ol>
            <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
          </ol>

          <Frontpage />
          <Button variant="contained" color="secondary">
            Secondary
      </Button>
        </div>
      </div>
    );
  }
}
