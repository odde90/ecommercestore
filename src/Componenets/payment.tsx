import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CreditCard from './payments/creditCard'
import { TextField, FormHelperText } from '@material-ui/core';
 


export default class Payment extends Component {
    state = { selected: "" };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ selected: e.target.value });
    };
    render() {
       
      const { selected } = this.state;
      return (
          
        <FormControl required component="fieldset" name="method-of-payment">
          <RadioGroup onChange={this.handleChange} value={selected}>
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit Card"
            />
             {this.state.selected === 'credit' && <CreditCard/>}
            <FormControlLabel 
            value="swish" 
            control={<Radio />} 
            label="Swish" />
            {this.state.selected === 'swish' && 
            <TextField
            helperText="Swish the total amount to the number 000 111 22 33 and write your number below"
               
              placeholder="Swish phone number"
              inputProps={{
                minlength : 10,
                maxlength: 10,
                required: true
              
              }} />}


            <FormControlLabel
              value="cash"
              control={<Radio />}
              label="Cash"
            />
            {this.state.selected === 'cash' && <p>Pay by cash when you recieve the order</p>}


          </RadioGroup>
          <FormHelperText>Required</FormHelperText>
          
        </FormControl>
      
       
      );
    }
  }





  const containerStyle1: React.CSSProperties={
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 10,
    marginTop: 0,
    fontWeight: 500
    
   
}



       
