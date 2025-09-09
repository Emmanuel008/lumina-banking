import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FinancialTools from './components/FinancialTools';
import AboutUs from './components/AboutUs';
import Content from './components/Content';
import WhyChooseUs from './components/WhyChooseUs';
import ReadySection from './components/ReadySection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <FinancialTools />
      <AboutUs />
      <Content />
      <WhyChooseUs />
      <ReadySection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
