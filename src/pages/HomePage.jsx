import React from 'react'
import { products } from './ProductData/product.js'
import athleticcottonsock from '../Assets/products/athletic-cotton-socks-6-pairs.jpg'
import rating45 from '../Assets/ratings/rating-45.png'
import rating40 from '../Assets/ratings/rating-40.png'
import checkmark from '../Assets/Icons/checkmark.png'
import basketball from '../Assets/products/intermediate-composite-basketball.jpg'
import plaincottonTshirt from '../Assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg'
import { Link } from 'react-router'

import './HomePage.css'
import Header from '../components/Header.jsx'
const HomePage = () => {

  return (
    <>

      <Header/>
    <div className="home-page">
      <div className="products-grid">
        {products.map((product)=>{
          return(
            <div key={product.id} className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={product.image} />
          </div>

          <div className="product-name limit-text-to-2-lines">
           {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={product.rating.stars} />
            <div className="product-rating-count link-primary">
              
              {product.rating.count}
            </div>
          </div>

          <div className="product-price">
            ${product.priceCents/100}
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src={checkmark} />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

          )
        })}
      </div>
    </div>
    </>
  )
}

export default HomePage
