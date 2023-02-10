import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <NavLink to='/Login'>Login</NavLink>
      <NavLink to='/Dashboard'>Dashboard</NavLink>
      <NavLink to='/CartList'>CART</NavLink>
      <NavLink to='/Bill'>Bill</NavLink>
      <NavLink to='/Logout'>Logout</NavLink>
    </nav>
  )
}

export default Navbar
