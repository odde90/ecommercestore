import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CreditCard from './payments/creditCard'

export default class MyForm extends Component {
    state = { selected: "" };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ selected: e.target.value });
    };
    render() {
        console.log(this.state);
      const { selected } = this.state;
      return (
          
        <FormControl component="fieldset" name="method-of-payment">
          <RadioGroup onChange={this.handleChange} value={selected}>
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit Card"
            />
            
            <FormControlLabel 
            value="swish" 
            control={<Radio />} 
            label="Swish" />

            <FormControlLabel
              value="cash"
              control={<Radio />}
              label="Pay by cash when recieve"
            />

          </RadioGroup>
          {this.state.selected === 'credit' && <CreditCard/>}
          {this.state.selected === 'swish' && <p>I</p>}
          {this.state.selected === 'cash' && <p>H</p>}
        </FormControl>
      
       
      );
    }
  }






  