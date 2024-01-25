import React, { useState, useEffect } from 'react';
import './CustomSlider.css';

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  cursor: "pointer"
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "purple"
};

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
          <div className='image'>
            <img src={items[currentIndex]} alt={'ski'} />
          </div>
      </div>
      <div style={dotsContainerStyles}>
        {items.map((slide, index) => (
          <div
            style={dotStyle}
            key={index}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;

