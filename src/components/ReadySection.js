import React from 'react';
import { motion } from 'framer-motion';
import './ReadySection.css';

const ReadySection = () => {
  return (
    <section className="ready-section">
      <div className="ready-container">
        <div className="ready-content">
          <motion.div 
            className="ready-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="ready-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Ready to get started?
            </motion.h2>
          </motion.div>
          <motion.div 
            className="ready-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="ready-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              This is the space to introduce the Services section.<br />
              Briefly describe the types of services offered.
            </motion.p>
            <motion.button 
              className="contact-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <span className="btn-arrow">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
