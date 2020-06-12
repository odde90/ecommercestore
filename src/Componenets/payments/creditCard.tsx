import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';


export  class creditCard extends Component  {
   
    handleChange=(  e: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = e.currentTarget;
        this.setState({
           
             ...this.state,
             [ name]: value
          
          });  
    };
    render() {
        return (
            <div >
        <TextField
         label="Card Holder"
         type="text"
         style={containerStyle1}  
         inputProps={{
          required: true,
          minlength : 3
        
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
            
      
            
             </div>
        )
    }
}





export default creditCard;

const containerStyle1: React.CSSProperties={
  margin: '10'
}
