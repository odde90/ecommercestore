import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';


export  class swish extends Component  {
    
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
       
              </form>
             </div>
        )
    }
}





export default swish;

