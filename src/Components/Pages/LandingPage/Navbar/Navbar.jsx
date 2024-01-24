import React from 'react'
import logo from '../../../Images/logo1.png'
import AccountIcon from '../../../Images/Icons/AccountIcon';
import CartIcon from '../../../Images/Icons/CartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
      <div>
        <div className='top'></div>
        <div className="nav">
          <img src={logo} className="logo" alt="Logo" />
          <div className="nav-list">
            <ul>
              <li><a href="#deals">Deals</a></li>
              <li><a href="#whats-new">What's new</a></li>
              <li><a href="#delivery">Delivery</a></li>
          </ul>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
  
          <div className="centered-links">
            <a href="#account">
              <div className="icon-container">
                <AccountIcon />
              </div>
            <span>Account</span>
            </a>

              <a href="#help">Help</a>

              <a href="#cart">
                <div className='icon-container'>
                  <CartIcon />
                </div>
                  <span>Cart</span>
              </a>
        </div>
        <div className="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;