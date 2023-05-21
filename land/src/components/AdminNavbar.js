import React from "react";

const AdminNavbar = () =>{
    return(
        <nav className="navbar navbar-extend-sm navbar-white bg-white px-10">
            <i className="navbar-brand" href="#"> </i>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" 
            data-b-aria-expanded="false" aria-aria-label="Toggle navigation" ></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId" >
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0" >
                    <li className="nav-item dropdown" >
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Logout
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId" >
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">setting</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
                <form>

                </form>
            </div>

        </nav>
    )
}

export default AdminNavbar;