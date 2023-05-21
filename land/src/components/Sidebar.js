import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () =>{
    return(
        <div className="bg-white sidebar p-2">
            <div className="m-2">
                <i className="bi bi-bootstrap-fill me-3 "></i>
                <span className='brand-name fs-4'>Admin</span>
            </div>
            <hr className="text-dark"/>
            <div className="list-group list-group-flush">
                <a className="list-group-item py-2">
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span>Dashboard</span>
                </a>
                <Link to="/AdminUserpage" className="list-group-item py-2">
                <i className="bi bi-people fs-5 me-3"></i>
                    <span className="`fs-5">Users</span>
                </Link>
                <a className="list-group-item py-2">
                <i className="bi bi-clipboard-data fs-5 me-3"></i>
                    <span className="`fs-5">Report</span>
                </a>
                <a className="list-group-item py-2">
                <i className="bi bi-house fs-5 me-3"></i>
                    <span className="`fs-5">Settings</span>
                </a>
                <a className="list-group-item py-2">
                <i className="bi bi-house fs-5 me-3"></i>
                    <span className="`fs-5">Land</span>
                </a>
                <a className="list-group-item py-3">
                <i className="bi bi-house fs-5 me-3"></i>
                    <span className="`fs-5">Areas</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;