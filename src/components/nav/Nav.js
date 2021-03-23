import React from "react";
import "./Nav.css";
import Logo from "../../images/logo.png";
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <img src={Logo} alt="KRA LOGO" />
      <div className="menu">
        <Link to ='/'>Home</Link>
        <Link to ='/viewreports'>View Reports</Link>
        <Link to ='/allstaff'>All Staff</Link>
        <Link to ='/login'>Logout</Link>
        <Link to ='/addstaff'>Add Staff</Link>
      </div>
    </div>
  );
}

export default Nav;
