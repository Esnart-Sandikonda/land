import React from "react";
import './UserSideNavbar.css';
import { Link } from "react-router-dom";
import { BsHouse, BsPerson, BsKey, BsShieldLock, BsBuilding, BsGeoAlt } from 'react-icons/bs';
import userPicture from "../images/user.jpg";

const UserSidebar = () => {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <span className="brand-name fs-4">User</span> <br/>
        <img src={userPicture} alt="User" className="user-picture" />
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link to="/Hhhome" className="list-group-item py-2">
          <BsHouse className="icon" />
          <span className="fs-5">Home</span>
        </Link>
        <Link to="/Profile" className="list-group-item py-2">
          <BsPerson className="icon" />
          <span className="fs-5">Profile</span>
        </Link>
        <Link to="/ChengeOwnership" className="list-group-item py-2">
          <BsKey className="icon" />
          <span className="fs-5">Change Ownership</span>
        </Link>
        <Link to="/Clearance" className="list-group-item py-2">
          <BsShieldLock className="icon" />
          <span className="fs-5">Clearance</span>
        </Link>
        <Link to="/Estates" className="list-group-item py-2">
          <BsBuilding className="icon" />
          <span className="fs-5">Estates</span>
        </Link>
        <Link to="/Geoinformation" className="list-group-item py-3">
          <BsGeoAlt className="icon" />
          <span className="fs-5">Geoinformation</span>
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
