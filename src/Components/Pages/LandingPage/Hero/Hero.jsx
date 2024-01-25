import React from 'react';
import HeroTab from './HeroTab';
import sneaker1 from '../../../Images/Item1.png';
import sneaker2 from '../../../Images/sneaker2.png'
import './Hero.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import CustomSlider from './CustomSlider';



const Hero = () => {

  const sneakers = [sneaker1, sneaker2]

  return (
    <div className='hero'>
      <div>
        <HeroTab />
      </div>

      
      <div className="heroFlex">
        <div className="textArea">
          <h1>Get Latest Deals</h1>
          <div className='discount'>
            <p>at low discount from</p>
            <p className='span'>50%</p>
          </div>
          <button>Buy Now</button>
        </div>
        <div className='imageBox'>
            <CustomSlider items={sneakers} />
        </div>
      </div>
      <div className="menu-btn">
        
      </div>
    </div>
  );
};

export default Hero;
