import React from 'react'
import { Route, Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/member">Member</NavLink>
  </div>
);

const NavLink = ({ exact, to, children }) => (
  <Route exact={exact} path={to} children={({match}) => (
    <span>
      {match? children: (<Link to={to}>{children}</Link>)}
    </span>
  )} />
);

export default NavBar;
