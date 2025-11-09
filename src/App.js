import './App.css';

import HomePage from './pages/HomePage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import CheckOutPage from './pages/checkout/CheckOutPage.jsx';
import TrackingPage from './pages/TrackingPage.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </div>
  );
}

export default App

