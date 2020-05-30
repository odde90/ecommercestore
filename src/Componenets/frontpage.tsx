import React from 'react'
import { Button } from '@material-ui/core';


interface State {

}

interface Props {
}

function Frontpage(props: { myFunc: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; }) {
    return (
        <div>
            <h1>home page here</h1>
            <Button onClick={props.myFunc} variant="contained" color="secondary">
                add to cart
            </Button>
        </div>
    );
}


export default Frontpage 