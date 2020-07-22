import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {

  return(
    <div className="nav-main">
      <Link className="nav-link" to="/"> Home </Link>
      <Link className="nav-link" to="/pokemon"> Pokemon </Link>
      <Link className="nav-link" to="/favourite"> Favourite </Link>
    </div>
  )

}
