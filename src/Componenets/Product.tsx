import React from 'react'
import { Button } from '@material-ui/core';


interface Props { }


interface Props {
}

function Product(props: { myFunc: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; }) {
  return (
    <div>
      <h1>home page here</h1>
      <Button onClick={props.myFunc} variant="contained" color="secondary">
        add to cart
            </Button>
    </div>
  );
}


export default Product

