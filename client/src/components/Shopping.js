import React, {useEffect} from 'react'
import shopping from '../images/btn-shopping.png'



const Shopping = () => {



    let shoppingItem =  localStorage.getItem('number');
    if (!shoppingItem){
        localStorage.clear();
    };

    
  return (
    <img src={shopping} className='icon'/>
  )




}

export default Shopping