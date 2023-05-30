import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Hhome from "./Hhome";
import Footer from "./Footer";
const Home = ( {imageSrc}) => {
  return (

        <div>
            <Navbar/>
            <div className="bg">
            <div className="home-text">
                <h1 className="h1">
                    WELCOME 
                </h1>
                <h1>TO</h1>
                <h1>MINISTRY OF LANDS</h1>
    
            </div>
        </div>
        <Hhome/>
        <Footer/>
        </div>
        
      
  );
};

export default Home;