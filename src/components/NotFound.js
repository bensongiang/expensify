import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404! Whoa, this page does not exist.</h1>
    <Link to="/">Take me home!</Link>
  </div> 
);

export default NotFound;