import React from "react";
import "./Services.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Services = () => {
    return (

        <div>
            <Navbar/>
      <div className="container">
              <div className="card-container">
                  <div className="card-title">
                  <h3>Cadastral Surveying</h3>
                  </div>
                  <div className="card-body">
                  Cadastral surveying is the field of surveying that specializes in the establishment 
                  and re-establishment of property boundaries. Cadastral surveys create, mark and re-establish 
                  the boundaries of land parcels. A cadastre is a 
                  comprehensive recording of the property boundaries of all land parcels with real
                  property rights in a country
                  </div>
                  
                  
              </div>
  
              <div className="card-container">
              <div className="card-title">
              <h3>Land Assesssment</h3>
              </div>
              <div className="card-body">
              It involves the evaluation and analysis of land-related 
              information and data to support decision-making processes, land management, and 
              land administration activities. 
              </div>
              </div>
  
              <div className="card-container">
              <div className="card-title">
              <h3>Land Valuation</h3>
              </div>
              <div className="card-body">
              involves determining the monetary value of land and properties. It serves 
              as a crucial component of land management, taxation, land transactions,
              and decision-making processes. 
              </div>
              </div>
  
              </div>
              
              <Footer/>
   </div> 
   );
  };
  export default Services;