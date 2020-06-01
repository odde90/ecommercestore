import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
/* eslint-disable import/first */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 700,
      height: 700,
      marginTop: 150
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  })
);
/* The example data is structured as follows: */
import image from "../assets/1.png";
import { Button, Typography } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
const assets = [
  {
    img: image,
    title: "Dark Blue",
    author: "author",
    prise: "5000"
  },
  {
    img: image,
    title: "Groom Classic",
    author: "author",
    prise: "2500"
  },
  {
    img: image,
    title: "Summer Suit",
    author: "author",
    prise: "1800"
  },
  {
    img: image,
    title: "Tiger of Sweden",
    author: "author",
    prise: "2000"
  },
  {
    img: image,
    title: "Party Style",
    author: "author",
    prise: "3000"
  }
];

export default function TitlebarGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList}>
        {/*         <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">eShop</ListSubheader>
        </GridListTile> */}
        {assets.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              subtitle={tile.title}
              title={<span>{tile.prise} Kr</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <Button variant="contained" color="secondary">
                    <ShoppingCartOutlinedIcon
                      fontSize="inherit"
                      style={{ fontSize: "20px" }}
                    />
                    Buy{"  "}
                  </Button>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
