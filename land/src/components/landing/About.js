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
                <h3>About The System</h3>
                </div>
                <div className="card-body">
               
                    The land management system has been designed to assist in the 
                    management and administration of 
                    land-related activities. It provides tools and functionalities to streamline and
                    automate various tasks and processes involved in land management by the ministry of lands. <br/>
                    thhhhj
                </div>
                
                
            </div>
        </div>
        <Footer/>
        </div>
        
      
  );
};

export default About;