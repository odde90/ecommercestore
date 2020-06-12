import React, { StatelessComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from 'react-router';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface MatchParams {
  firstName: string
  lastName: string,
  email: string,
  phone: string,
  adress: string,
  price: number
}

interface Props  {
  location:
  {
   state: MatchParams
};}


export default function Receipt(props: Props) {
console.log(props.location.state)
    //console.log(props.location.state.firstName)
    
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2">
         Thank you, {props.location.state.firstName} {props.location.state.lastName}!
       </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         The details about your order have been sent to {props.location.state.email}
        </Typography> 
      </CardContent>
     
    </Card>
  );
}