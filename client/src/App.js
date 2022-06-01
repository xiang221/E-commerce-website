import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Unfinish from "./pages/Unfinish";


function App() {

  // const getCart = () =>{
  //   const cartItem = localStorage.getItem('cart')
  //   const result = JSON.parse(cartItem) || [];
  //   console.log('result', result)
  //   return result
  // }
  const [cart, setCart] = useState([])
  // console.log('state', cart)

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home  cart={cart} setCart={setCart} />} />
          <Route path="product/:uid" element={<Product cart={cart} setCart={setCart}/>} />
          <Route path="cart" element={<Cart />} cart={cart} setCart={setCart} />  
          <Route path="unfinish" element={<Unfinish/>} cart={cart} setCart={setCart}/>
        </Routes>
    </div>
  );
}

export default App;
