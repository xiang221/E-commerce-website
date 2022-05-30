import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Unfinish from "./pages/Unfinish";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:uid" element={<Product />} />
          <Route path="cart" element={<Cart />} />  
          <Route path="unfinish" element={<Unfinish/>}/>
        </Routes>
    </div>
  );
}

export default App;
