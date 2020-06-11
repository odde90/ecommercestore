import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import classes from "*.module.css";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    width: 1000
  }
});

interface State {}

interface Props {}

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}
