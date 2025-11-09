import React from 'react'
import './Header.css'
import { Link } from 'react-router'
import { NavLink } from 'react-router'
import logowhite from '../Assets/Icons/logo-white.png'
import logo from '../Assets/Icons/logo.png'
import mobilelogo from '../Assets/Icons/mobile-logo-white.png'
import searchIcon from '../Assets/Icons/search-icon.png'
import cartIcon from '../Assets/Icons/cart-icon.png'
const Header = () => {
  return (
   <div className="header">
         <div className="left-section">
           <NavLink to="/" className="header-link">
             <img className="logo"
               src={logowhite}/>
             <img className="mobile-logo"
               src={mobilelogo} />
           </NavLink>
         </div>
   
         <div className="middle-section">
           <input className="search-bar" type="text" placeholder="Search" />
   
           <button className="search-button">
             <img className="search-icon" src={searchIcon} />
           </button>
         </div>
   
         <div className="right-section">
           <NavLink className="orders-link header-link" to="Order">
   
             <span className="orders-text">Orders</span>
           </NavLink>
   
           <NavLink className="cart-link header-link" to="checkout.html">
             <img className="cart-icon" src={cartIcon} />
             <div className="cart-quantity">3</div>
             <div className="cart-text">Cart</div>
           </NavLink>
         </div>
       </div>
  )
}

export default Header
