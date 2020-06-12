import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';


export  class creditCard extends Component  {
   
    handleChange=(  e: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = e.currentTarget;
        this.setState({
           
             ...this.state,
             [ name]: value
          
          }, ()=>{console.log(this.state)});  
    };
    render() {
        return (
            <div >
        <form autoComplete="on" >

        <FormControl required>
        <TextField
         label="Card Holder"
         type="text"
         style={containerStyle1}  
         inputProps={{
          minlength : 3,
          required: true
        
        }} 
            />
            <TextField
          label="Card Number"
          style={containerStyle1}        
          name='cardNumber' 
          onChange={this.handleChange}
          inputProps={{
            required: true,
            minlength: 16,
            maxlength: 16
          }} 
        />
           <TextField
         label="Expires"
         type="month"
         defaultValue="2020-05" 
         inputProps={{
          required: true
        }} 
            />
        <TextField
         label="CVC/CVV"
         defaultValue="000" 
         inputProps={{
          minlength: 3,
          maxlength: 3,
          required: true

        }} 
            />
            
            </FormControl>
              </form>
             </div>
        )
    }
}





export default creditCard;

const containerStyle1: React.CSSProperties={
  margin: '10'
}
