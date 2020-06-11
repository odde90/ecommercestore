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
  console.log(cartItems);
  const modalHandel = () => {
    SimpleModal();
  };

  return (
    <nav>
      <h2 className="glow">ONLINE SHOP</h2>
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
          <SimpleModal /* {onclick = () => SimpleModal} */ />
          <span /* onClick={() => alert("show modal...")} */>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
