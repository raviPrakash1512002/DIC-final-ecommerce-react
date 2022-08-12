import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Routes, Route } from "react-router-dom";
import Order from './Components/Orders/Order';

import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Requireauth from './Components/Requireauth/Requireauth';
import Shipment from './Components/Shipment/Shipment';
// import Chat from './Components/chat/Chat';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Order></Order>}></Route>
        <Route path='/shipment' element={
      
            <Shipment></Shipment>
       
        }></Route>
        {/* <Route path='/Chat' element={
          <Requireauth>
            <Chat></Chat>
          </Requireauth>
        }></Route> */}
  
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
