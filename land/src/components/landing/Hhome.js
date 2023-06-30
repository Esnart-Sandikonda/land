import React from "react";
import "./Hhome.css";

const Hhome = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-title">
          <h2>Our Mission</h2>
        </div>
        <div className="card-body">
          <p>
            To create an enabling environment for efficient, effective, and sustainable management of land and housing management services to the general public in order to promote and encourage sustainable economic growth and development.
          </p>
          <img src="https://media.istockphoto.com/id/182825245/photo/land-surveyor.webp?b=1&s=170667a&w=0&k=20&c=UtcuHHrMilzKBG5PXWOx8d_9zhAp6iq6k2qPTLjPrQg=" alt="Card Image" />
          <button className="read-more-button">Read More</button>
        </div>
      </div>

      <div className="card-container">
        <div className="card-title">
          <h2>Our Mandate</h2>
        </div>
        <div className="card-body">
          <p>
            To provide land, housing, and urban development services to the general public, stakeholders, and other parties seeking these services to ensure that physical development takes place in an orderly and sustainable manner.
          </p>
          <img src="https://images.squarespace-cdn.com/content/v1/5b5140edb40b9dddf418783b/1532539096535-JYTOQJZ3FFYET6NBG9KK/surveyor-equipment-gps-system-or-theodolite-PCMKNRD.jpg?format=1500w" alt="Card Image" />
          <button className="read-more-button">Read More</button>
        </div>
      </div>

      <div className="card-container">
        <div className="card-title">
          <h2>Our Objective</h2>
        </div>
        <div className="card-body">
          <p>
            To improve and sustain urbanizing systems, increase the availability of affordable and adequate houses, improve the provision of geospatial information, and enhance equitable access to land and tenure security.
          </p>
          <img src="https://images.squarespace-cdn.com/content/v1/5b5140edb40b9dddf418783b/1532539096535-JYTOQJZ3FFYET6NBG9KK/surveyor-equipment-gps-system-or-theodolite-PCMKNRD.jpg?format=1500w" alt="Card Image" />
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Hhome;
