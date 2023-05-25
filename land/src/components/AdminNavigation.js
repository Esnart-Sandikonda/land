import React from "react";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";

const AdminNavigation =() =>{
    return(
        <div className="container-fluid bg-secondary min-vh-100">
            <div className="row">
                <div className="col-2 bg-white vh-100">
                <Sidebar/>
                </div>
                <div className="col">
                <AdminDashboard/>
                </div>
            </div>
        </div>
    )
}

export default AdminNavigation;