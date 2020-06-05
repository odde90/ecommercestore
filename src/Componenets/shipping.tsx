import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function Shipping(){
    const classes = useStyles();
    const [state, setState] = React.useState<{ price: string }>({
    
        price: 'str'
        
      });
  
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
      const today= (days:number) =>{
        var dt = new Date();

        return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + (dt.getDate() +days);
      }
      console.log(state)
    return(
        <div>
            <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">Shipping method</InputLabel>
        <Select
          native
          value={state.price}
          onChange={handleChange}
          name="price"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Next day,{today(1)} </option>
          <option value={20}>Two days{today(2)} </option>
          <option value={30}>Three days{today(3)} </option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
    )
    
}


