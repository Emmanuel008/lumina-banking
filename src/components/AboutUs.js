import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-container">
        <motion.div 
          className="about-us-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="about-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            ABOUT US
          </motion.h2>
          <motion.p 
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It's an opportunity to tell the story behind the business or describe a special service or product it offers.
          </motion.p>
          <motion.button 
            className="read-more-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
            <span className="btn-arrow">→</span>
          </motion.button>
        </motion.div>
      </div>
      <motion.div 
        className="about-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="footer-left"></div>
        <div className="footer-right"></div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
