import React from 'react';
import './Userlandpage.css';
import Userbar from './Userbar';
import UserSideNavbar from './UserSideNavbar';

const Userlandpage = ({ Profile }) => {
  return (
    <div className="d-flex flex-column vh-100">
      <Userbar />
      <div className="row flex-grow-1">
        <div className="col-md-3 bg-light">
          <UserSideNavbar />
        </div>
        <div className="col-md-9">
          <div className="profile-content">
            {Profile}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlandpage;
