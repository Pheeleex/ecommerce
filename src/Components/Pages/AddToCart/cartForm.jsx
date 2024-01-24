import React from 'react'
import DoorDelivery from '../../Images/Icons/DoorDelivery'
import PickupStation from '../../Images/Icons/PickupStation'
import ReturnIcon from '../../Images/Icons/ReturnIcon'

const CartForm = () => {
  return (
    <div className='cart-form'>
        <div className='form'>
            <h1> Choose your location </h1>
            <div className='input-form'>
            <div className='inputs'>
                <label>State</label> <br />
                <select>
                  <option>Choose State</option>
                  <option>Abuja</option>
                  <option>The Buj</option>
                </select>
            </div>

            <div className='inputs'>
                <label>City</label> <br />
                <select>
                  <option>Choose City</option>
                  <option>Kubwa</option>
                  <option>Apo</option>
                </select>
            </div>

            <div className='inputs'>
                <label>Mobile</label> <br />
                <input
                  placeholder='Enter city'
                  type='number'
                />
            </div>

            <div className='inputs'>
                <label>Email</label> <br />
                <input
                  placeholder='Enter email'
                  type='email'
                />
            </div>
            </div>
        </div>
        <div className='deli-ver'>
        <div className='deliver'>
          <DoorDelivery />
          <div>
            <h3> Door Delivery</h3>
            <p>Delivery fees NGN500</p>
            <p>Ready for delivery between 30 November & 31 November when you order</p>
          </div>
        </div>

        <div className='deliver'>
          <PickupStation />
          <div>
            <h3> Pickup Station</h3>
            <p>Delivery fees NGN250</p>
            <p>Ready for delivery between 30 November & 31 November when you order</p>
          </div>
        </div>

        <div className='deliver'>
          <ReturnIcon />
          <div>
            <h3> Return Policy</h3>
            <p>Return within 7days for all eligle terms</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CartForm