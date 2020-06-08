import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { ChangeEvent } from 'react';
import { EnterHandler } from 'react-transition-group/Transition';
import  Shipping from './shipping';

import MyForm  from './payment'
import { kMaxLength } from 'buffer';
import { maxHeight, lineHeight } from '@material-ui/system';
import { Button } from '@material-ui/core';
import { normalize } from 'path';

export class checkoutForm extends Component  {
    state={
        
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            adress: ''
        
    }
    handleChange=(  e: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = e.currentTarget;
        this.setState({
           
             ...this.state,
             [ name]: value
          
          }, ()=>{console.log(this.state)});  
    };
    render() {
        //const { form: {firstName, lastName, email, phone ,adress} }  = this.state;
        return (
            <div>
            {/* </div> <form  noValidate autoComplete="off">className={classes.root} */}
        <form  noValidate autoComplete="on"  style={formStyle}>
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
            minlength : 3
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
             
        />
        <TextField
          label="Phone number"
          type="tel"
          style={containerStyle1}  
          name='phone' 
          onChange={this.handleChange}    
          variant="outlined"    
        />
        <TextField
        label="Adress"
        style={containerStyle1}  
        name='adress' 
        onChange={this.handleChange}   
        variant="outlined"
        inputProps={{
          minlength : 3
        }}      
      />

      <Shipping />
      <h3>Total:</h3>

     <div style={containerStyle1}  >
     <MyForm/>
      </div> 
      <div>
      <Button variant="contained" size='small' color="primary" type='submit' href="#contained-buttons">
     submit
  </Button>
  </div>
              </form>
             </div>
        )
    }
}



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



