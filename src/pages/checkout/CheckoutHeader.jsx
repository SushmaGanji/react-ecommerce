import React from 'react'
import { Link } from 'react-router'
import logo from '../../Assets/Icons/logo.png'
import mobilelogo from '../../Assets/Icons/mobile-logo.png'
import checkoutlockicon from '../../Assets/Icons/checkout-lock-icon.png'
import './CheckOut.css'
import './CheckoutHeader.css' 
const CheckoutHeader = () => {
  return (
    <div className="checkout-header">
          <div className="header-content">
            <div className="checkout-header-left-section">
              <Link to="/">
                <img className="logo" src={logo} />
                <img className="mobile-logo" src={mobilelogo} />
              </Link>
            </div>
    
            <div className="checkout-header-middle-section">
              Checkout (<Link className="return-to-home-link"
                to="/">3 items</Link>)
            </div>
    
            <div className="checkout-header-right-section">
              <img src={checkoutlockicon} />
            </div>
          </div>
        </div>
  )
}

export default CheckoutHeader
