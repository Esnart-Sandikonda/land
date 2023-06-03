import React from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Userlandpage =() =>{
    return (
		<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a href="/Userlandpage" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
							<span className="fs-5 fw-bolder d-none d-sm-inline">User</span>
						</a>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
							<li>
								<Link to="/Userlandpage" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-house"></i> 
                                    <span className="ms-1 d-none d-sm-inline">Home</span> </Link>
							</li>
							<li>
								<Link to="/Userlandpag/AdminUserpage" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> 
                                    <span className="ms-1 d-none d-sm-inline">Profile</span> </Link>
							</li>
							<li>
								<Link to="/Userlandpage/ApplyForLease" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> 
                                    <span className="ms-1 d-none d-sm-inline">Apply for Lease</span></Link>
							</li>
              <li>
								<Link to="/Userlandpag/UsreProfile" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> 
                                    <span className="ms-1 d-none d-sm-inline">Clearance</span></Link>
							</li>
							<li >
								<a href="#" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-power"></i> 
                                    <span className="ms-1 d-none d-sm-inline">Logout</span></a>
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
	)
}

export default Userlandpage;