import React from 'react'
import './cart.css'

const Overview = () => {
    const selectOption = [
        "Overview", "Description", "Shipping", "Warranty", "Return Policy", "Reviews"
    ]
  return (
    <div>
        <div className="overview">
            {
                selectOption.map((item, index) => (
                    <div className="option-select" key={index}>
                        {item}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Overview