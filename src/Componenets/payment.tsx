import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CreditCard from './payments/creditCard'
import { TextField, FormHelperText } from '@material-ui/core';
 
interface Props{
  selected: string
  ship: (e:React.ChangeEvent< any>)=>void;
  }

export default class Payment extends Component<Props> {
    // state = { selected: "" };
    // handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   this.setState({ selected: e.target.value });
    // };
    render() {
       
      //const { selected } = this.state;
      return (
          
        <FormControl required component="fieldset" name="method-of-payment">
          <RadioGroup  onChange={this.props.ship} value={this.props.selected}>
            <FormControlLabel
              name="selected"
              value="credit"
              control={<Radio />}
              label="Credit Card"
            />
             {this.props.selected === 'credit' && <CreditCard/>}
            <FormControlLabel 
            name="selected"
            value="swish" 
            control={<Radio />} 
            label="Pay directly from bank account" />
            {this.props.selected === 'swish' && 
            <TextField
              label="Your ID"
               
              placeholder="personal number"
              inputProps={{
                minlength : 10,
                maxlength: 10
              
              }} />}


            <FormControlLabel
            name="selected"
              value="cash"
              control={<Radio />}
              label="Cash"
            />
            {this.props.selected === 'cash' && <p>Pay by cash when you recieve the order</p>}


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