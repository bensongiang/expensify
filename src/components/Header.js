import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <Link to="/dashboard" className="header-logo"><h1>Expensify</h1></Link>
    <div className="navigation">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/add">Add</NavLink>
      <button onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);