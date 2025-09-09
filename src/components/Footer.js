import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Newsletter Section */}
          <div className="footer-section">
            <h3 className="footer-heading">JOIN OUR NEWSLETTER</h3>
            <div className="newsletter-form">
              <div className="input-group">
                <label htmlFor="email" className="input-label">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="email-input" 
                  placeholder=""
                />
              </div>
              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  className="newsletter-checkbox"
                />
                <label htmlFor="newsletter" className="checkbox-label">
                  Yes, subscribe me to your newsletter *
                </label>
              </div>
              <button className="submit-btn">Submit</button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#solutions" className="footer-link">Solutions</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="footer-section">
            <h3 className="footer-heading">SOCIAL</h3>
            <ul className="footer-links">
              <li><a href="https://linkedin.com" className="footer-link">LinkedIn</a></li>
              <li><a href="https://facebook.com" className="footer-link">Facebook</a></li>
              <li><a href="https://instagram.com" className="footer-link">Instagram</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-heading">CONTACT</h3>
            <div className="contact-info">
              <p className="contact-item">Info@mysite.com</p>
              <p className="contact-item">123-456-7890</p>
              <p className="contact-item">
                500 Terry Francine Street,<br />
                San Francisco, CA 94158
              </p>
            </div>
          </div>

          {/* Policy Section */}
          <div className="footer-section">
            <h3 className="footer-heading">POLICY</h3>
            <ul className="footer-links">
              <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/accessibility" className="footer-link">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2035 by Luminu. Built on <a href="https://wix.com" className="wix-link">Wix Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
