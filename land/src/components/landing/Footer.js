import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h4>About Us</h4>
            <p>
              The Ministry of Land is responsible <br/>
			  for managing and regulating land <br/>
			  resources in our country. We aim <br/>
			  to ensure efficient land administration, <br/>
			  sustainable land use, and equitable <br/>
			   land distribution.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>Contact Information</h4>
            <p>
              Ministry of Land<br />
              123 Main Street, City<br />
              Country<br />
              Email: info@landministry.gov<br />
              Phone: +123456789
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>
		  <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} Ministry of Land. All rights reserved.</p>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              <ul className="footer-social">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
