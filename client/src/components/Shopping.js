import React from 'react'
import { Link } from "react-router-dom";
import {BsCart} from 'react-icons/bs'

const Shopping = () => {



    let shoppingItem =  localStorage.getItem('number');
    // if (!shoppingItem){
    //     //localStorage.clear();
    // };

    
  return (
    <Link to="/cart"><BsCart style={{fontSize:'30px', margin:'0 10px'}}/></Link>
  )




}

export default Shopping