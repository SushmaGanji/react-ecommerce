import './App.css';
import HomePage from './pages/HomePage.jsx'
import CheckOutPage from './pages/CheckOutPage.jsx'
import Orders from './pages/Orders.jsx';
import Tracking from './pages/Tracking.jsx';
import {Routes,Route} from 'react-router'
function App() {
  return (
    <div  className='App'>
      <Routes>
        <Route path="/" element={ <HomePage/>}></Route>
        <Route path="checkout" element={ <CheckOutPage/>}></Route>
        <Route path='Orders' element={<Orders/>}></Route>
        <Route path="tracking" element={<Tracking/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
