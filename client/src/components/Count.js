import React from 'react'

const Count = (props) => {


    
    const increase = () =>{
        if(props.quantity<props.stock){
        props.setQuantity(props.quantity+1);
        }
    };
    
    const decrease = () =>{
        if(props.quantity>0){
        props.setQuantity(props.quantity-1);
        };
    };

    

  return (
    <div className='amountBtn'>
       <div onClick={decrease} style={{cursor:'pointer'}}> - </div>
       <div>{props.quantity}</div>
       <div onClick={increase} style={{cursor:'pointer'}}> + </div> 
    </div>
  )




}

export default Count




