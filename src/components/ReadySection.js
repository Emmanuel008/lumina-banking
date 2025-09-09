import React from 'react';
import './ReadySection.css';

const ReadySection = () => {
  return (
    <section className="ready-section">
      <div className="ready-container">
        <div className="ready-content">
          <div className="ready-left">
            <h2 className="ready-heading">Ready to get started?</h2>
          </div>
          <div className="ready-right">
            <p className="ready-description">
              This is the space to introduce the Services section.<br />
              Briefly describe the types of services offered.
            </p>
            <button className="contact-btn">
              Contact Us
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
