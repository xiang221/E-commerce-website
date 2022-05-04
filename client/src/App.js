import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />    
        </Routes>
    </div>
  );
}

export default App;
