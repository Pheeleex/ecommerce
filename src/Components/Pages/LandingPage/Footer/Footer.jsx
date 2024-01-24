import React from 'react'
import logo1 from '../../../Images/logo1.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className='foot1'>
            <img src={logo1} alt='footer' />
        </div>

        <div className="foot2">
            <h2>New to constro</h2>
            <p>Subscribe to our news letter and updates</p>
            <div className='input'>
                <input></input>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer