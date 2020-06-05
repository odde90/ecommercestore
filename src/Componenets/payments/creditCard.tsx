import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';


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
        <form  noValidate autoComplete="off" >
        <TextField
         label="Card Holder"
         type="text"
        // defaultValue="John Doe" 
            />
            <TextField
          label="Card Number"
          //style={containerStyle1}        
         // value={firstName}
          name='cardNumber' 
          onChange={this.handleChange}
          inputProps={{
            minlength: 16,
            maxlength: 16
          }} 
        />
           <TextField
         label="Expires"
         type="month"
         defaultValue="2020-05" 
            />
        <TextField
         label="CVC/CVV"
         defaultValue="000" 
         inputProps={{
          minlength: 3,
          maxlength: 3
        }} 
            />
            
      
              </form>
             </div>
        )
    }
}





export default creditCard;

