import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import MyForm  from './payment'
import { Button } from '@material-ui/core';
import AdminForm from './adminForm'



export class adminPage extends Component  {
    state={
    isLogged : true
   }
    handleChange=(  e: React.ChangeEvent< any>)=> {
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
             { this.state.isLogged  &&  <AdminForm />}
            </div>
   
             
        )
    }
}





