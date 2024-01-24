import React from 'react'
import StarsIcon from '../../../Images/Icons/StarsIcon'
import LoveIcon from '../../../Images/Icons/loveIcon'
import './Product.css'

const BestPrices = ({bestPriceItems}) => {
   
  return (
    <div className="best-prices">
      <h2 className='deals'>Best Prices</h2>
      <div className="card-container">
        {bestPriceItems.map((item, index) => (
          <div className="card-desc" key={index}>
            <div className="card">
              <div className="icons">
                <StarsIcon />
                <LoveIcon />
              </div>
              <div className="content">
                <div className="image" style={item.style}>
                  <img src={item.src} alt="Best Price" style={item.imgStyle} />
                </div>
              </div>
            </div>
            <div className="description">
              <h2>{item.productName}</h2>
              <span>{item.info}</span>
              <h3>{item.price}</h3>
              <span>{item.formerPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestPrices