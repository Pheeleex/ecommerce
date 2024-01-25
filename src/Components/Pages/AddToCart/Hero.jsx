import { useState } from 'react';
import React from 'react';
import StarsIcon from '../../Images/Icons/StarsIcon';
import './cart.css';
import CartForm from './cartForm';
import { useLocation } from 'react-router-dom';

const HeroCart = () => {
  const location = useLocation();
  const data = location.state;
  const [itemNumber, setItemNumber] = useState(0);

  const handleIncrement = () => {
    setItemNumber(prevItemNumber => prevItemNumber + 1)
  };

  const handleDecrement = () => {
    if (itemNumber > 0) {
      setItemNumber(prevItemNumber => prevItemNumber - 1)
    }
  };


  return (
    <div  className='heroCart-container'>
      <div className='hero-cart'>
        <div className='cart'>
          <div className='image'>
            <img src={data.src} alt='smartwatch' />
            <div className='stock'>
              <p className='in'>in stock</p>
            </div>
          </div>
          <div className='content'>
            <h2>{data.productName}</h2>
            <p>
              {data.productName} is the latest apple watch product, available in different colors
            </p>
            <p>
              Brand: <span>{data.productName}| See other Apple products</span>
            </p>
            <h2 className='price'>{data.price}</h2>
            <span className='delivery'>Shipping from NGN500 to Kubwa Abuja</span>
            <div className='ratings'>
              <StarsIcon />
              <span>(900 verified rating)</span>
              <div className='load-cart'>
                <div className='add-remove'>
                  <div className='load' onClick={handleDecrement}> - </div>
                  <div className='item-no'> {itemNumber} </div>
                  <div className='load' onClick={handleIncrement}> + </div>
                </div>
                <div className='cart-btns'>
                  <div className='cart-btn btn-1'>Buy now</div>
                  <div className='cart-btn btn-2'>Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CartForm />
      </div>
    </div>
  );
};

export default HeroCart;

