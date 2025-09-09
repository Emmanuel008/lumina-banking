import React, { useState, useEffect } from 'react';
import './FinancialTools.css';

const FinancialTools = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      number: "01",
      title: "Digital Wallet",
      description: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features."
    },
    {
      number: "02", 
      title: "Smart Savings",
      description: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features."
    },
    {
      number: "03",
      title: "Investment Tools", 
      description: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features."
    },
    {
      number: "04",
      title: "Budget Tracker",
      description: "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section id="solutions" className="financial-tools">
      <div className="financial-tools-container">
        <div className="financial-tools-content">
          <div className="content-left">
            <h2 className="financial-heading">FINANCIAL TOOLS</h2>
            <h3 className="section-title">Streamline Your Banking</h3>
            <p className="financial-description">
              This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
            </p>
            <div className="card-indicators">
              {cards.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${activeCard === index ? 'active' : ''}`}
                  onClick={() => setActiveCard(index)}
                />
              ))}
            </div>
          </div>
          <div className="content-right">
            <div className="cards-container">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`feature-card ${activeCard === index ? 'active' : ''}`}
                  style={{ zIndex: cards.length - index }}
                >
                  <div className="card-number">{card.number}</div>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-description">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTools;
