import React, { useState, useEffect } from 'react';
import './Loader.css';
import logo from '../../assets/logo.PNG';

const Loader = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after the 2-second rotation completes
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-container">
      <div className="logo-wrapper">
        {/* Layer 1: Static Outer Gear */}
        <img src={logo} alt="Opflux Gear" className="logo-outer" />
        
        {/* Layer 2: Rotating Inner Compass */}
        <img src={logo} alt="Opflux Compass" className="logo-inner-rotate" />
      </div>
      
      <h1 className={`company-name ${showText ? 'visible' : ''}`}>
        Opfluxsolution
      </h1>
    </div>
  );
};

export default Loader;
