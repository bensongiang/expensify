import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <Link to="/" className="header-logo"><h1>Expensify</h1></Link>
    <div className="navigation">
      <NavLink to="/" exact={true}>Dashboard</NavLink>
      <NavLink to="/add">Add</NavLink>
    </div>
  </header>
);

export default Header;