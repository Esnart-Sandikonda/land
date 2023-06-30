import React from "react";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import axios from "axios";

const AdminNavigation = () => {
  const navigate = useNavigate(); // Access the navigate function from the useNavigate hook

  const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/StaffPortal')
		}).catch(err => console.log(err));
	}

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <NavLink to="/AdminNavigation" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
              <span className="fs-5 fw-bolder d-none d-sm-inline">Land Officer Dashboard</span>
            </NavLink>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li>
                <NavLink to="/AdminNavigation" className="nav-link text-white px-0 align-middle" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                  <i className="fs-4 bi-speedometer2"></i>
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/AdminNavigation/AdminUserpage" className="nav-link px-0 align-middle text-white" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                  <i className="fs-4 bi-people"></i>
                  <span className="ms-1 d-none d-sm-inline">Property Registration</span>
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/AdminNavigation/Viewland" className="nav-link px-0 align-middle text-white" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                  <i className="fs-4 bi-eye"></i>
                  <span className="ms-1 d-none d-sm-inline">View land</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/AdminNavigation/LeaseApplications" className="nav-link px-0 align-middle text-white" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                  <i className="fs-4 bi-eye"></i>
                  <span className="ms-1 d-none d-sm-inline">LeaseApplications</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/AdminNavigation/AdminProfileview" className="nav-link px-0 align-middle text-white" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                  <i className="fs-4 bi-person"></i>
                  <span className="ms-1 d-none d-sm-inline">Profile</span>
                </NavLink>
              </li>
              
              <li>
                <a href="#" className="nav-link px-0 align-middle text-white" onClick={handleLogout}>
                  <i className="fs-4 bi-exit"><BiExit /></i>
                  <span className="ms-1 d-none d-sm-inline">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className='p-2 d-flex justify-content-center shadow bg-light'>
            <h4>Land Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
