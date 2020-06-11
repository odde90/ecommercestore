import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { RouteComponentProps } from "react-router-dom";
import { products } from "../productdata";
import { BrowserRouter, Router, Switch, Link, Route } from "react-router-dom";

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
import { Product } from "../productdata";
interface Props {
  addcartfun: (product: Product) => void;
}
function Home(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList}>
        {products.map((product: Product) => (
          <GridListTile key={product.img}>

            <Link to={'/product/' + product.productID}>

              {<img src={require('./../assets/' + '1.png')} alt={product.title} />}

              <GridListTileBar
                subtitle={product.title}
                title={<span>{product.price} Kr</span>}
                actionIcon={<IconButton aria-label={`info about ${product.title}`}
                 className={classes.icon}>
                    <Button variant="contained" color="secondary">
                       <ShoppingCartOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                        Buy{"  "}
                        </Button>
                       </IconButton>} />
            </Link>
            <GridListTileBar
              subtitle={product.title}
              title={<span>{product.price} Kr</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${product.title}`}
                  className={classes.icon}
                >
                  <Button onClick={() => props.addcartfun(product)}>
                    <ShoppingCartOutlinedIcon
                      fontSize="inherit"
                      style={{ fontSize: "20px" }}
                    />
                    Buy
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

export default Home;

/* variant="contained"
                    color="secondary" */
