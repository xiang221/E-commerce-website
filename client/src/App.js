import React,{useState} from "react"
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Thank from "./pages/Thank"
import Unfinish from "./pages/Unfinish"
import Profile from "./pages/Profile"


function App() {

  // const getCart = () =>{
  //   const cartItem = localStorage.getItem('cart')
  //   const result = JSON.parse(cartItem) || [];
  //   return result
  // }



  return (
    <div>
        <Routes>
          <Route path="/:category" element={<Home />} />
          <Route path="product/:uid" element={<Product />} />
          <Route path="cart" element={<Cart />}/>  
          <Route path="thankyou" element={<Thank />} />  
          <Route path="unfinish" element={<Unfinish/>} />
          <Route path="profile" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
