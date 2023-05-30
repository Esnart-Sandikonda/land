import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">LAND MANAGEMENT SYSTEM</span>
      <div className="nav-items">
        <a href="/">Home</a>
        <a href="/OwnerPortal">Owner portal</a>
        <a href="/StaffPortal">Staff portal</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      
    </div>
  );
};

export default Navbar;