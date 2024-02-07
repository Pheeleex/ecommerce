import React from 'react'
import StarsIcon from '../../Images/Icons/StarsIcon'
import LoveIcon from '../../Images/Icons/loveIcon'
import './cart.css'

const MoreItems = ({groupItems}) => {
  return (
    <div className="more-items">
        <div className="products">
            <h2>Check other Items</h2>
            <div className="card-container">
                {groupItems.map((item)=> (
                        <div className='card-desc'>
                        <div className="card">
                         <div className="icons">
                           <StarsIcon />
                           <LoveIcon />
                         </div>
               
                         <div className="content">
                           <div className="image" style={item.style}>
                             <img src={item.src} key={item.id} alt="Smartwatch" style={item.imgStyle} />
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
    </div>
  )
}

export default MoreItems