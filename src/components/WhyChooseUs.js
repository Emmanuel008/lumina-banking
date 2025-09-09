import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="why-choose-us-container">
        <div className="why-choose-us-content">
          <div className="content-left">
            <h2 className="why-choose-heading">WHY CHOOSE US</h2>
            <p className="intro-text">
              This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
            </p>
            
            <div className="feature-blocks">
              <div className="feature-block">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3 className="feature-title">Customer-Centric Focus</h3>
                  <p className="feature-description">
                    This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
                  </p>
                </div>
              </div>

              <div className="feature-block">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3 className="feature-title">Commitment to Security</h3>
                  <p className="feature-description">
                    This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
                  </p>
                </div>
              </div>

              <div className="feature-block">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3 className="feature-title">Transparent and Fair Practices</h3>
                  <p className="feature-description">
                    This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-right">
            <div className="card-visual">
              <div className="credit-card">
                <div className="card-chip"></div>
                <div className="card-number">3257 4277 8540 3379</div>
                <div className="card-valid">VALID FROM 00/00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
