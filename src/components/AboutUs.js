import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-container">
        <div className="about-us-content">
          <h2 className="about-heading">ABOUT US</h2>
          <p className="section-description">
            This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It's an opportunity to tell the story behind the business or describe a special service or product it offers.
          </p>
          <button className="read-more-btn">
            Read More
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
      <div className="about-footer">
        <div className="footer-left"></div>
        <div className="footer-right"></div>
      </div>
    </section>
  );
};

export default AboutUs;
