import React, { useState, useEffect } from 'react';
import './CustomSlider.css';

const CustomSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="custom-slider">
      <div className="slider-content">
        {items.map((src, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {items.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`pagination-button ${index === currentIndex ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;

