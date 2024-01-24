import React from 'react'

import './Hero.css'; // Import the CSS file
import ApplianceIcon from '../../../Images/Icons/ApplianceIcon';
import PhoneIcon from '../../../Images/Icons/PhoneIcon';
import ComputerIcon from '../../../Images/Icons/ComputerIcon';
import FashionIcon from '../../../Images/Icons/FashionIcon'
import SportIcon from '../../../Images/Icons/SportIcon';
import OthersIcon from '../../../Images/Icons/OthersIcon';
import GamingIcon from '../../../Images/Icons/GamingIcon';
import BabyProductIcon from '../../../Images/Icons/BabyProductIcon';
import HealthBeutyIcon from '../../../Images/Icons/HealthBeautyIcon';
import ElecronicsIcon from '../../../Images/Icons/ElecronicsIcon';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const HeroTab = () => { 
  const options = [
    { name: 'Appliances', icon: <ApplianceIcon /> },
    { name: 'Phone &Tablets', icon: <PhoneIcon /> },
    { name: 'Computing', icon: <ComputerIcon /> },
    { name: 'Fashion', icon: <FashionIcon /> },
    { name: 'Sport Items', icon: <SportIcon /> },
    { name: 'Electronics', icon: <ElecronicsIcon /> },
    { name: 'Health &Beauty', icon: <HealthBeutyIcon /> },
    { name: 'Baby Product', icon: <BabyProductIcon /> },
    { name: 'Gaming', icon: <GamingIcon /> },
    { name: 'Others', icon: <OthersIcon /> },
  ]
  return (
    <div className="hero-tab">
      <p className='select'>Select any category below</p>
      <div className="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
     <div className='options'>
        {options.map((option, index) =>(
          <div className="option">
            <div> {option.icon} </div>
             <div className='links'> {option.name} </div>   
          </div>
        ))}
     </div>
    </div>
  );
};

export default HeroTab;
