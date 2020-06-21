import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';

interface Props{
ship: (e:React.ChangeEvent< any>)=>void;
}
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

export default function Shipping(props: Props){
  
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
    return(
        <div>
            <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">Shipping method</InputLabel>
        <Select
          native
          onChange={props.ship}
          name="price"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={100}>FedEx, 100kr, delivered by {today(1)} </option>
          <option value={50}>PostNord, 50kr, delivered by {today(3)} </option>
          <option value={0}>DHL, free, delivered by {today(7)} </option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
    );
    
}


