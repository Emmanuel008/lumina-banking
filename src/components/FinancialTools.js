import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          <motion.div 
            className="content-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="financial-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              FINANCIAL TOOLS
            </motion.h2>
            <motion.h3 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Streamline Your Banking
            </motion.h3>
            <motion.p 
              className="financial-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
            </motion.p>
            <motion.div 
              className="card-indicators"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {cards.map((_, index) => (
                <motion.button
                  key={index}
                  className={`indicator ${activeCard === index ? 'active' : ''}`}
                  onClick={() => setActiveCard(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="content-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="cards-container">
              <AnimatePresence mode="wait">
                {cards.map((card, index) => (
                  activeCard === index && (
                    <motion.div
                      key={index}
                      className="feature-card active"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ zIndex: cards.length - index }}
                    >
                      <motion.div 
                        className="card-number"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {card.number}
                      </motion.div>
                      <motion.h4 
                        className="card-title"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        {card.title}
                      </motion.h4>
                      <motion.p 
                        className="card-description"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {card.description}
                      </motion.p>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTools;
