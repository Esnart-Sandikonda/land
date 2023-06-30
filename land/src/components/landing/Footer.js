import React, { useState } from 'react';
import './Footer.css';
import Modal from 'react-modal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleEmailClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    console.log('Submitted subject:', subject);
    console.log('Submitted content:', content);
    closeModal();
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            The land assistant aims at easing the tiresome task.<br />
            of manually following up your land property details.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p>
            Address: 270, Zomba City, Malawi<br />
            Email: 
            <a href="#!" onClick={handleEmailClick}>
              info@land.com
            </a>
            <br />
            Phone: +265 998332225
          </p>
        </div>
        <div className="footer-section">
          <h4>Social Media Links</h4>
          <ul className="footer-social">
            <li>
              <a href="https://www.facebook.com/your-institution-facebook-page-url" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/your-institution-twitter-page-url" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/your-institution-linkedin-page-url" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/your-institution-instagram-page-url" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="email-modal">
        <div className="modal-header">
          <button className="close-button" onClick={closeModal}>X</button>
        </div>
        <div className="modal-content">
          <h2>Compose Email</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                value={content}
                onChange={handleContentChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
