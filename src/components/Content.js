import React from 'react';
import { motion } from 'framer-motion';
import './Content.css';

const Content = () => {
  return (
    <section className="content">
      <div className="content-container">
        <motion.h2 
          className="content-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ALWAYS CONNECTED
        </motion.h2>
        <div className="content-grid">
          <motion.div 
            className="content-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="content-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 2L24.5 15.5L38 20L24.5 24.5L20 38L15.5 24.5L2 20L15.5 15.5L20 2Z" stroke="#2196F3" strokeWidth="2" fill="none"/>
                <path d="M16 20L18 22L24 16" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <h3 className="content-title">Two-factor</h3>
            <p className="content-description">
              This is the space to introduce the Services Briefly describe the types of services offered.
            </p>
          </motion.div>
          
          <motion.div 
            className="content-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="content-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="8" y="12" width="24" height="16" rx="2" stroke="#2196F3" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="2" fill="#2196F3"/>
                <path d="M12 8V12M28 8V12" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.div>
            <h3 className="content-title">Data encryption</h3>
            <p className="content-description">
              This is the space to introduce the Services Briefly describe the types of services offered.
            </p>
          </motion.div>
          
          <motion.div 
            className="content-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="content-icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 12C8 8.68629 10.6863 6 14 6H26C29.3137 6 32 8.68629 32 12V20C32 23.3137 29.3137 26 26 26H14C10.6863 26 8 23.3137 8 20V12Z" stroke="#2196F3" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="1.5" fill="#2196F3"/>
                <circle cx="24" cy="16" r="1.5" fill="#2196F3"/>
                <circle cx="32" cy="12" r="3" fill="#2196F3"/>
              </svg>
            </motion.div>
            <h3 className="content-title">Text alerts</h3>
            <p className="content-description">
              This is the space to introduce the Services Briefly describe the types of services offered.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Content;
