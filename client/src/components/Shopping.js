import React from 'react'




const Shopping = () => {

    let shoppingItem =  localStorage.getItem('number');
    if (!shoppingItem){
        localStorage.clear();
    };

    
  return (
    <div>Shopping</div>
  )




}

export default Shopping