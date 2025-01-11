import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import OrderLayout from './components/orders/OrderLayout';
import Location from './components/orders/Location';
import NewOrder from './components/orders/NewOrder';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<OrderLayout/>}>
          <Route index element={<Location/>}/>
          <Route path='new-order' element={<NewOrder/>}/>
        </Route>
      </Routes>
      <div className='chat-sup'>
        <div className="row">
          <button id='chat-sup'>Chat with us!</button>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
