import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="why-choose-us-container">
        <div className="why-choose-us-content">
          <motion.div 
            className="content-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="why-choose-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              WHY CHOOSE US
            </motion.h2>
            <motion.p 
              className="intro-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
            </motion.p>
            
            <div className="feature-blocks">
              <motion.div 
                className="feature-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3 className="feature-title">Customer-Centric Focus</h3>
                  <p className="feature-description">
                    This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3 className="feature-title">Commitment to Security</h3>
                  <p className="feature-description">
                    This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3 className="feature-title">Transparent and Fair Practices</h3>
                  <p className="feature-description">
                    This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="content-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card-visual"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="credit-card"
                animate={{ 
                  rotate: [0, 1, -1, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="card-chip"></div>
                <div className="card-number">3257 4277 8540 3379</div>
                <div className="card-valid">VALID FROM 00/00</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
