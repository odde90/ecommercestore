import React from "react";
import { products } from "../productdata";
import { RouteComponentProps, match } from "react-router";
import Home from "./gridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Button, GridList } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

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

interface Props extends RouteComponentProps<{ id: string }> { }

export function getById() {
  /* console.log(products.find(item => item.productID === 1)) */
  return products.find(item => item.productID === 5);
}

const data = getById();

function Product(props: Props) {
  const classes = useStyles();
  const id = props.match.params.id;
  const product = products.find(item => item.productID === Number(id));
  if (product) {
    return (
      <div className={classes.root}>
        <GridList cellHeight={400} className={classes.gridList}>
          <GridListTile key={product.img}>

            {
              <img
                src={require("./../assets/" + product.img)}
                alt={product.title}
              />
            }

            <GridListTileBar
              subtitle={product.title}
              title={<span>{product.price} Kr</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${product.title}`}
                  className={classes.icon}
                >
                  {" "}
                  <Button variant="contained" color="secondary">
                    {" "}
                    <ShoppingCartOutlinedIcon
                      fontSize="inherit"
                      style={{ fontSize: "20px" }}
                    />{" "}
                    Buy{"  "}
                  </Button>{" "}
                </IconButton>
              }
            />

          </GridListTile>


          <Typography variant="body1" gutterBottom>
            <h1>{product.title}</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>


        </GridList>

      </div>
    );
  } else {
    return <h1>product not found</h1>;
  }
}

export default Product;
