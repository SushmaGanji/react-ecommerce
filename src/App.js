import './App.css';
import HomePage from './components/pages/HomePage.jsx'
import CheckOutPage from './components/pages/CheckOutPage.jsx'
import {Routes,Route} from 'react-router'
function App() {
  return (
    <div  className='App'>
      <Routes>
        <Route path="/" element={ <HomePage/>}></Route>
        <Route path="checkout" element={ <CheckOutPage/>}></Route>
     
      </Routes>
    </div>
  );
}

export default App;
