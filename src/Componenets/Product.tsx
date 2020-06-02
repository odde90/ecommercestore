import React from "react";
import { products } from '../productdata'
import { RouteComponentProps, match } from 'react-router'
import Home from './gridList'

import { Button, GridList } from "@material-ui/core";

interface Props extends RouteComponentProps<{ id: string }> { }

export function getById() {
  /* console.log(products.find(item => item.productID === 1)) */
  return products.find(item => item.productID === 5);
}


const data = getById();





function Product(props: Props) {
  const id = props.match.params.id
  const product = products.find(item => item.productID === Number(id));
  if (product) {
    return (
      <div>
        <h1>Product page here</h1>
        <p>{product.productID}</p>
        <p>{product.img}</p>
        <p>{product.price}</p>
        <p>{product.title}</p>

      </div>
    );
  }
  else {
    return <h1>product not found</h1>
  }

}

export default Product;

