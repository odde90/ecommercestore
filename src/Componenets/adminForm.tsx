import React from 'react';
import { Button, TextField } from '@material-ui/core';


const AdminForm=()=> {
    
    return (
        <div>
        <form  noValidate autoComplete="on"  >
            <TextField
              label="User name"
              name='userName' 
              variant="outlined"
              //onChange={this.handleChange}
              inputProps={{
                minlength : 3,
                required: true
              }} 
            />

            <TextField
              label="Password"
              name='password' 
              type='password'
              variant="outlined"
              //onChange={this.handleChange}
              inputProps={{
                minlength : 3,
                required: true
              }} 
            />
            <div>
            <Button variant="contained" size='small' color="primary" type='submit' href="#contained-buttons">
           submit
          </Button>
          </div>
              </form>
             </div>
    )
  }

  export default AdminForm 