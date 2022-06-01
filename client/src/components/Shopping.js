import React from 'react'
import shopping from '../images/btn-shopping.png'
import { Link } from "react-router-dom";


const Shopping = () => {



    let shoppingItem =  localStorage.getItem('number');
    if (!shoppingItem){
        localStorage.clear();
    };

    
  return (
    <Link to="/cart"><img src={shopping} className='icon' /></Link>
  )




}

export default Shopping