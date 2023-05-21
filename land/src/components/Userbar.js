import React from "react";
import "./Userbar.css";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">LAND MANAGEMENT SYSTEM</span>
      <div className="nav-items">
        
        <a href="/OwnerPortal">Logout</a>
       
      </div>
      
    </div>
  );
};

export default UserNavbar;