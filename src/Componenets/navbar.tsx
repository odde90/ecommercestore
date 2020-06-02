
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, colors } from '@material-ui/core'


function Navbar(props: { cartNumber: React.ReactNode }) {
  return (
    <nav >
      <h2>ONLINE SHOP</h2>
      <ul>
        <li><Link to="/">Sign in</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><a href="#">Cart <span>{props.cartNumber}</span></a></li>
      </ul>
    </nav>
  )
}

export default Navbar

