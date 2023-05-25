import React from "react";
import 'bootstrap/js/dist/dropdown'

const AdminNavbar = () =>{
    return(
        <nav className="navbar navbar-expand-sm navbar-white bg-white px-3">
            <i className="navbar-brand bi bi-justify-left fs-6"> </i>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" 
            data-b-aria-expanded="false" aria-aria-label="Toggle navigation" ></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId" >
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0" >
                        <a> Logout</a>
                </ul>
                 </div>
        </nav>
    )
}

export default AdminNavbar;