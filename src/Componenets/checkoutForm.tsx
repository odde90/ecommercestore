import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { ChangeEvent } from 'react';
import { EnterHandler } from 'react-transition-group/Transition';
import  Shipping from './shipping';

import MyForm  from './payment'
import { kMaxLength } from 'buffer';
import { maxHeight } from '@material-ui/system';
import { Button } from '@material-ui/core';

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
            <div >
            {/* </div> <form  noValidate autoComplete="off">className={classes.root} */}
        <form autoComplete="on"  style={formStyle}>
           <h1>Check out</h1>
            <TextField
          label="First name"
          style={containerStyle1}        
         // value={firstName}
          name='firstName' 
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
          inputProps={{
            minlength : 3
          }}   
        />
     
        <TextField
          label="Email"
          type="email"
          style={containerStyle1}  
          name='email' 
          onChange={this.handleChange} 
             
        />
        <TextField
          label="Phone number"
          type="tel"
          style={containerStyle1}  
          name='phone' 
          onChange={this.handleChange}        
        />
        <TextField
        label="Adress"
        style={containerStyle1}  
        name='adress' 
        onChange={this.handleChange}   
        inputProps={{
          minlength : 3
        }}      
      />

      <Shipping />
      <h3>Total:</h3>

      <MyForm/>

      <Button variant="contained" color="primary" type='submit' href="#contained-buttons">
  submit
</Button>
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
    color: 'white',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
    
   
}



