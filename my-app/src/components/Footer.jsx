import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>APP NAME</h4>
          <p>
            Reducing food waste,<br />
            Supporting communities,<br />
            One meal at a time.
          </p>
        </div>
        <div className="footer-section">
          <h4>Need Help?</h4>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-section">
          <h4>Follow us</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © APP NAME 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
