import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            FUTURE-READY,<br />
            SMART BANKING
          </h1>
          <button className="btn-primary">
            Get Started
            <span className="btn-arrow">→</span>
          </button>
          <p className="hero-description">
            This is a space to welcome visitors to the site.<br />
            Grab their attention with copy that clearly<br />
            states what the site is about.
          </p>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
