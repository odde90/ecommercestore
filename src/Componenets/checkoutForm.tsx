import React, { Component, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { ChangeEvent } from 'react';
import { EnterHandler } from 'react-transition-group/Transition';
import  Shipping from './shipping';

import Payment  from './payment'
import { kMaxLength } from 'buffer';
import { maxHeight, lineHeight } from '@material-ui/system';
import { Button } from '@material-ui/core';
import { normalize } from 'path';
import { Link, Redirect } from 'react-router-dom';
import { CartContext } from './context';

 const initialState={
        
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  adress: '',
  price: 0,
  redirect: false

}
export class checkoutForm extends Component  {
  state=initialState;
    handleChange=(  e: React.ChangeEvent< any>)=> {
        const { name, value } = e.currentTarget;
        this.setState({
           
             ...this.state,
             [ name]: value
          
          }, ()=>{console.log(this.state)});  
    };


    handleSubmit=()=>{
      this.setState({ redirect: true });
      //this.setState(initialState)
     
    }
     
  
    render() {
      if (this.state.redirect) return ( 
      <Redirect to={{ 
        pathname: '/Receipt', 
        state: {
          ...this.state
        } 
      }}/>);
    else   return (
            <div>
        <form  autoComplete="on"  style={formStyle} onSubmit={this.handleSubmit.bind(this)}>
           <h1>Check out</h1>
            <TextField
          label="First name"
          style={containerStyle1}        
          name='firstName' 
          variant="outlined"
          onChange={this.handleChange}
          inputProps={{
            minlength : 3,
            required: true
          }} 
          
        />
          <TextField
          label="Last name"
          style={containerStyle1}   
          name='lastName' 
          onChange={this.handleChange}  
          variant="outlined"
          inputProps={{
            minlength : 3,
            required: true
          }} 
        />
     
        <TextField
          label="Email"
          type="email"
          id="filled-size-small"
          style={containerStyle1}  
          name='email' 
          variant="outlined"
          onChange={this.handleChange} 
          inputProps={{
            minlength : 3,
            required: true
          }} 
             
        />
        <TextField
          label="Phone number"
          type="tel"
          style={containerStyle1}  
          name='phone' 
          onChange={this.handleChange}    
          variant="outlined"    
          inputProps={{
            minlength : 3,
            required: true
          }} 
        />
        <TextField
        label="Adress"
        style={containerStyle1}  
        name='adress' 
        onChange={this.handleChange}   
        variant="outlined"     
        inputProps={{
          minlength : 3,
          required: true
        
        }} 
      />

      <Shipping ship={this.handleChange}/>
      <h3>Total: {+this.state.price+this.context.totalAmount} kr</h3>

     <div   >
     <Payment />
      </div> 
      <div>
      <Button variant="contained" size='small' color="primary" type='submit' 
       >
     submit
  </Button>
  </div>
              </form>
             </div>
        )
    }
}

checkoutForm.contextType = CartContext;


const formStyle: React.CSSProperties={
    
    marginLeft: 'auto',
    marginRight: 'auto',
     display: 'flex',
     flexDirection: 'column'


     //flexWrap: 'wrap',
   


}
const containerStyle1: React.CSSProperties={
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 10,
    marginTop: 0,
    fontWeight: 500
    
   
}



