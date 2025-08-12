import React, { useState, useEffect } from 'react';
import './App.css'
const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    'AfricaSlid.svg',
    'SaudiaSlid.svg',
    'FifaSlid.svg',
    'WorldCup.svg'
  ];  // Example images, replace with your actual URLs

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="container">
    <div className="slider ">
      <div className="slid">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Slide ${i + 1}`}
            className={`slide-img ${i === index ? 'actives' : ''}`}
          />
        ))}
      </div>
    </div></div>
  );
};

export default Slider;