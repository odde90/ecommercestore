import React from "react";
import { Link } from "react-router-dom";
import { Container, colors } from "@material-ui/core";
import SimpleModal from "./Modal";

function Navbar(props: { totalitems: React.ReactNode }) {
  const modalHandel = () => {
    SimpleModal();
  };

  const contHandel = () => {
    console.log(props.totalitems);
  };

  return (
    <nav>
      <h2>ONLINE SHOP</h2>
      <ul>
        <li>
          <Link to="/">Sign in</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <SimpleModal item={props.totalitems} />
          <span>{() => contHandel}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
