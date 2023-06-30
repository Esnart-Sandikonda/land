import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (item) => {
    setActiveNavItem(item);
  };

  const handleSeeMore = (route) => {
    navigate(route);
  };

  const handleDownload = (downloadUrl) => {
    window.open(downloadUrl);
  };

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img
          src="https://o.remove.bg/downloads/fdc8872a-8087-4eb8-8902-b640bf76a149/land_2-removebg-preview.png"
          alt="Logo"
        />
        <span>LAND MANAGEMENT SYSTEM</span>
      </div>
      <div className="nav-items">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          onClick={() => setActiveNavItem("Home")}
        >
          <span className="icon-text">Home</span>
        </NavLink>
        <NavLink
          to="/OwnerPortal"
          activeClassName="active"
          onClick={() => setActiveNavItem("Owner Portal")}
        >
          <span className="icon-text">Owner Portal</span>
        </NavLink>
        <NavLink
          to="/StaffPortal"
          activeClassName="active"
          onClick={() => setActiveNavItem("Staff Portal")}
        >
          <span className="icon-text">Staff Portal</span>
        </NavLink>
        <div
          className={`nav-item-dropdown ${
            activeNavItem === "Services" || activeNavItem === "Documents"
              ? "active"
              : ""
          }`}
          onMouseEnter={() => handleMouseEnter("Services")}
          onMouseLeave={() => handleMouseEnter(null)}
        >
          <NavLink
            to="/service"
            onClick={() => setActiveNavItem("Services")}
            onMouseEnter={() => handleMouseEnter("Services")}
          >
            <span className="icon-text">Services</span>
          </NavLink>
          {activeNavItem === "Services" && (
            <div className="dropdown-content">
              <NavLink to="/land-assessment">Land Assessment</NavLink>
              <NavLink to="/sketch-map-planning">Sketch Map Planning</NavLink>
            </div>
          )}
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={() => setActiveNavItem("Documents")}
            onMouseEnter={() => handleMouseEnter("Documents")}
          >
            <span className="icon-text">Documents</span>
          </NavLink>
          {activeNavItem === "Documents" && (
            <div className="dropdown-content">
              <NavLink to="/document1">Customary Land Act</NavLink>
              <button
                className="download-button centered"
                onClick={() =>
                  handleDownload(
                    "https://faolex.fao.org/docs/pdf/mlw170882.pdf"
                  )
                }
              >
                Download
              </button>
              <NavLink to="/document2">Lease Application Form</NavLink>
              <button
                className="download-button centered"
                onClick={() =>
                  handleDownload(
                    "https://images.template.net/wp-content/uploads/2017/09/Lease-Extension-Application-Form-Sample.zip"
                  )
                }
              >
                Download
              </button>
              <NavLink to="/document3">National Land Policy</NavLink>
              <button
                className="download-button centered"
                onClick={() =>
                  handleDownload(
                    "http://www.reforms.gov.mw/psrmu/sites/default/files/National%20Land%20Policy%202002.pdf"
                  )
                }
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
