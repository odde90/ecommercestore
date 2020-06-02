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
    const [state, setState] = React.useState<{  name: string }>({
    
        name: 'str'
      });
  
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return(
        <div>
            <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">Shipping method</InputLabel>
        <Select
          native
          value={state.name}
          onChange={handleChange}
          name="name"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>One day</option>
          <option value={20}>Two days</option>
          <option value={30}>Three days</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
    )
    
}


