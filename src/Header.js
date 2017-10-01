import React from 'react';
import logo from './brlo_logo.png';
import './Header.css';

const Header = (props) => {
  return (<nav className="navbar navbar-expand-md fixed-top">
    <a className="navbar-brand" href="/"><img src={logo} alt="BRLO" /></a>
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link link-brlo" href="/orders">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-brlo" href="/create">Create</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control form-control-brlo mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-brlo my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>);
};

export default Header;
