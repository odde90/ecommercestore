import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SimpleModal from "./Modal";
import { products, Product } from "../productdata";
import { CartContext } from "./context";

interface Props {
  totalitems: Product[];
  totalitemsCount: number;
}

/* props: { totalitems: React.ReactNode }
 */
function Navbar() {
  const { cartItems } = useContext(CartContext);
  const modalHandel = () => {
    SimpleModal();
  };

  return (
    <nav>
      <h2 className="glow"> <Link to="/">ONLINE SHOP</Link></h2>
      <ul>
        <li>
          <Link to="/admin">Sign in</Link>
        </li>
       
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <SimpleModal />
          <span >
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
