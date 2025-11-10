import './App.css';

import HomePage from './pages/HomePage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import CheckOutPage from './pages/checkout/CheckOutPage.jsx';
import TrackingPage from './pages/TrackingPage.jsx';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useEffect,useState } from 'react';

function App() {
   const[cart,setCart]=useState([])
   useEffect(()=>{
    
  axios.get("/api/cart-items?expand=product")
  .then((response)=>{
    setCart(response.data)
  })
   },[])
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckOutPage  cart={cart}/>} />
          <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </div>
  );
}

export default App

