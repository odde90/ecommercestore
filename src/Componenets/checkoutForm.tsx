import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { ChangeEvent } from 'react';
import { EnterHandler } from 'react-transition-group/Transition';
import  Shipping from './shipping';



export class checkoutForm extends Component  {
    state={
        form: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            adress: ''
        }
    }
    handleChange=(  e: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = e.currentTarget;
        this.setState({
            form : { 
             ...this.state.form,
             [ name]: value
           }
          }, ()=>{console.log(this.state)});  
    };
    render() {
        //const { form: {firstName, lastName, email, phone ,adress} }  = this.state;
        return (
            <div >
            {/* </div> <form  noValidate autoComplete="off">className={classes.root} */}
        <form  noValidate autoComplete="off"  style={formStyle}>
           <h1>Check out</h1>
            <TextField
          label="First name"
          style={containerStyle1}        
         // value={firstName}
          name='firstName' 
          onChange={this.handleChange}
        />
          <TextField
          label="Last name"
          style={containerStyle1}   
          name='lastName' 
          onChange={this.handleChange}         
        />
     
        <TextField
          label="Email"
          style={containerStyle1}  
          name='email' 
          onChange={this.handleChange}        
        />
        <TextField
          label="Phone number"
          style={containerStyle1}  
          name='phone' 
          onChange={this.handleChange}        
        />
        <TextField
        label="Adress"
        style={containerStyle1}  
        name='adress' 
        onChange={this.handleChange}        
      />

      <Shipping/>
      <h3>Total:</h3>
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



