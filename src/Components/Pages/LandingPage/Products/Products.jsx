import React, { useState } from 'react'
import cardItems from '../ProductItems'
import StarsIcon from '../../../Images/Icons/StarsIcon'
import LoveIcon from '../../../Images/Icons/loveIcon'
import BestPrices from './BestPrices'
import { useNavigate } from 'react-router-dom'
import './Product.css'




const Products = () => {
    /*Setting products to 8 per page */
      const cardsPerPage = 8;
      const [currentPage, setCurrentPage] = useState(1)
      const startIndex = (currentPage -1) * cardsPerPage
      const endIndex = startIndex + cardsPerPage
      const currentCards = cardItems.slice(startIndex, endIndex)
        /*Pagination*/
      const bestPriceItems = cardItems.filter((item) => item.bestPrice);
      const totalPages = Math.ceil(cardItems.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const navigate = useNavigate();


  const handleCardClick = (item) => {
    console.log("clicked", item)
    navigate('/AddtoCart', {state: {...item, group:item.group}})
  }
      
    return (
      <>
      <div className="products">
        <h2 className='deals'>Latest Deals</h2>
        <div className='card-container'>
      {currentCards.map((item) => (
        <div className='card-desc'>
         <div className="card" onClick={()=> handleCardClick(item)} >
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
      <div className='pagination'>
        {Array.from({ length:totalPages}, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={()=>handlePageChange(page)}>
              {page}
            </button>
        ))}
      </div>
      </div>
          <BestPrices bestPriceItems={bestPriceItems} />
      </>
    );
  };

export default Products;
