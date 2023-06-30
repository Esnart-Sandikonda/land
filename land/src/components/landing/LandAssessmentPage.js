import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandAssessmentPage.css";
import Navbar from "./Navbar";

const LandAssessmentPage = () => {
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
      <h2 className="centered-text">Land Assessment</h2>
      <div className="container">
        <div className="card">
          <h4>What's Land Assessment</h4>
          <p>
            Land assessment is the process of evaluating and determining the value of a piece of land based on various factors such as its location, size, zoning, accessibility, and potential for development. It provides valuable information for property owners, investors, and government agencies to make informed decisions regarding land purchase, sale, development, taxation, and urban planning.
          </p>
        </div>

        <div className="card">
          <h4>Benefits of Land Assessment</h4>
          <p>
            Land assessment offers several benefits. It ensures fair and accurate valuation of land, promotes transparency in real estate transactions, and provides valuable information for property owners, investors, and government agencies. It helps in making informed decisions regarding land purchase, sale, development, taxation, and urban planning.
          </p>
        </div>

        <div className="card">
          <h4>Apply for Land Assessment</h4>
          <p>
            To apply for land assessment, you need to contact your local land assessment office or relevant government agency. They will guide you through the application process, which may involve submitting necessary documents, paying fees, and providing information about the land. It is advisable to consult with professionals, such as surveyors or appraisers, to ensure the accuracy of the assessment.
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
            <h6>Log in first to book a land assessment slot.</h6>
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

export default LandAssessmentPage;
