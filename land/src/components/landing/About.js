import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => {
    return (

        <div>
            <Navbar/>
      <div className="container">
              <div className="card-container">
                  <div className="card-title">
                  <h3>About the system</h3>
                  </div>
                  <div className="card-body">
                  The land management system has been designed to assist in the 
                    management and administration of 
                    land-related activities. It provides tools and functionalities to streamline and
                    automate various tasks and processes involved in land management by the ministry of lands.
                  </div>
                  
                  
              </div>
  
              <div className="card-container">
              <div className="card-title">
              <h3>About Owner Portal</h3>
              </div>
              <div className="card-body">
              The owner portal in this system aims to enhance transparency, efficiency, 
              and convenience for landowners by providing them with a centralized platform 
              to access and manage relevant information about their properties and engage in land-related processes.
              </div>
              </div>
  
              <div className="card-container">
              <div className="card-title">
              <h3>About Admin Portal</h3>
              </div>
              <div className="card-body">
              The admin portal in this system empowers administrators to efficiently manage 
              and control the system's operations, data, and user activities. 
              It enables them to streamline administrative processes, 
              ensure data integrity enforce policies and regulations, 
              and make well-informed decisions to support effective land management.
              </div>
              </div>
  
              </div>
              
              <Footer/>
   </div> 
   );
  };
  export default About;