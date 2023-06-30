import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Hhome from "./Hhome";
import Footer from "./Footer";

const Home = ({ imageSrc }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://www.africangeomatics.com/images/intro1.jpg",
    "https://www.africangeomatics.com/images/intro6.jpg",
    "https://www.africangeomatics.com/images/intro15.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <div
        className="bg"
        style={{
          backgroundImage: `url("${images[currentImageIndex]}")`
        }}
      ></div>
      <div className="welcome-text">
        <div className="scrolling-text">
          <div className="scrolling-title">
            Welcome To Your Land Administration Assistant. Let's get started.
          </div>
        </div>
      </div>
      <Hhome />
      <Footer />
    </div>
  );
};

export default Home;
