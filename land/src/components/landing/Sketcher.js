import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sketcher.css";
import Navbar from "./Navbar";

const Sketcher = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const images = [
    "https://www.africangeomatics.com/images/cadastral/cadastral1.jpg",
    "https://www.africangeomatics.com/images/intro2.jpg",
    "https://www.africangeomatics.com/images/intro15.jpg",
  ];

  const navigate = useNavigate();

  const handleBookNow = () => {
    if (isLoggedIn()) {
      console.log("Book Now clicked");
      navigate("/OwnerPortal");
    } else {
      setShowPopup(true);
    }
  };

  const isLoggedIn = () => {
    // Add your login logic here
    return false; // Replace with your actual login logic
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handleProceed = () => {
    setShowPopup(false);
    navigate("/OwnerPortal"); // Navigate to the Owner Portal sign-up page
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Navbar />
      <div className="slideshow-container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Land Assessment ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
      <h2 className="centered-text">Sketch Map Planning</h2>
      <div className="container">
        <div className="card">
          <h4>Sketch Mapping</h4>
          <p>
          Sketch mapping refers to the process of creating simple and informal maps or diagrams by hand, typically to represent a particular area, location, or concept. It is a visual representation that captures the essential elements of a space or idea, often in a quick and rough manner. Sketch mapping is commonly used in various fields such as urban planning, architecture, landscape design, and cartography. It allows individuals to quickly visualize and communicate spatial relationships, features, and ideas without the need for complex or detailed drawings.
          </p>
        </div>

        <div className="card">
          <h4>Benefits of Sketch Mapping</h4>
          <p>
          The purpose of sketch mapping can vary depending on the context. It may be used to explore and brainstorm design ideas, document observations during field surveys, communicate concepts to clients or colleagues, or simply for personal note-taking and visualization. sketch mapping provides a versatile and accessible approach to visualizing, communicating, and exploring spatial ideas, making it a valuable tool in various disciplines and applications.Sketch mapping allows for the rapid visualization of ideas, concepts, or spatial relationships.







          </p>
        </div>

        <div className="card">
          <h4>How To Apply</h4>
          <p>
            To apply for a sketch map appointment, you need to contact the lands office via the contacts provided below. They will guide you through the application process, which may involve submitting necessary documents, paying fees, and providing information about the land. It is advisable to consult with professionals, such as surveyors or appraisers, to ensure the accuracy of the sketch mapping. You need to be logged in first to be able to book a sketch planning appointment. Click on the book now button to proceed. You will be guided through the whole process.
          </p>
        </div>
      </div>
      <div className="centered-button-container">
        <button className="centered-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h6>Log in first to book a a sketch map plan slot.</h6>
            <button className="popup-close" onClick={handlePopupClose}>
              X
            </button>
            <button className="proceed-button" onClick={handleProceed}>
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sketcher;
