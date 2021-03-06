import React, { useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { products, Product } from "../productdata";
import { CartContext } from "./context";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    table: {
      minWidth: 650
    }
  })
);

export default function SimpleModal() {
  const { cartItems, getTotalAmount } = useContext(CartContext);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckout = () => {};
  var total = 0;

  const body = (
    <div>
    
      <TableContainer component={Paper}>
        <h2 id="simple-modal-title">Cart Items</h2>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Items</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(cartItem => (
              <TableRow key={cartItem.productID}>
                <TableCell component="th" scope="row">
                  {cartItem.title}
                </TableCell>
                <TableCell align="right">{cartItem.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Total Amount: {getTotalAmount()} kr
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/checkoutForm">
        <button type="button">Checkout</button>
      </Link>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        <ShoppingCartRoundedIcon style={{ color: "green", }} /> {cartItems.length}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
