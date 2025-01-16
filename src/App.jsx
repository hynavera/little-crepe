import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import OrderLayout from './components/orders/OrderLayout';
import Location from './components/orders/Location';
import NewOrder from './components/orders/NewOrder';
import Customize from './components/orders/Cart/Customize';
import PayInfo from './components/orders/Info/PayInfo';
import Confirm from './components/orders/Info/Confirm';
import Status from './components/orders/Info/Status';

function App() {
  return (
    <BrowserRouter basename={"/quatre-crepes"}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/order' element={<OrderLayout/>}>
            <Route index element={<Location/>}/>
            <Route path='new-order' element={<NewOrder/>}/>
            <Route path='customize' element={<Customize/>}/>
            <Route path='payinfo' element={<PayInfo/>}/>
            <Route path='confirm' element={<Confirm/>}/>
            <Route path='status' element={<Status/>}/>
          </Route>
        </Route>
        {/* <Route path='/order' element={<OrderLayout/>}>
            <Route index element={<Location/>}/>
            <Route path='new-order' element={<NewOrder/>}/>
            <Route path='customize' element={<Customize/>}/>
            <Route path='payinfo' element={<PayInfo/>}/>
            <Route path='confirm' element={<Confirm/>}/>
            <Route path='status' element={<Status/>}/>
          </Route> */}
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
