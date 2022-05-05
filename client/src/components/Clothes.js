import React, {useState, useEffect} from 'react'
import Count from './Count'



const Clothes = (props) => {


  const addToCart = () =>{
    let product = {
      title: props.Details.title,
      number: props.Details.number,
      size: props.Details.size,
      color: props.Details.color,
      price: props.Details.price
    };
    console.log(product); 
    localStorage.setItem("products", product);
  }
  //product = JSON.stringify(product);



  return (
    <div className='homeContainer'>
    {props.Details.map(({number, title, price, color, info, pic, stock}) => (
    <>
    <div className='detailContainer'>
      <img className='detailPic' src= {`http://localhost:3000/static/${pic}`}/>
    </div>        
    <div className='detailContainer'>
      <div className='detailText' style={{ fontSize: '1.5rem'}}> {title}</div>
      <div className='detailText' style={{ color: '#bababa' }}>{number}</div>
      <div className='detailText' style={{ fontSize: '1.2rem', paddingTop:'2.5rem'}}>TWD.{price}</div>
      __________________________________
      <div className='itemText'>顏色 | 
        <div className='detailColor' style={{backgroundColor:color}}></div>
      </div>
      <div className='itemText'>尺寸 |
        <div className='itemSize'>S</div>
        <div className='itemSize'>M</div>
        <div className='itemSize'>L</div>
        <div className='itemSize'>XL</div>
      </div>
      <div className='detailText'>數量 |
      <Count stock={stock}/>
      </div>
      <button className="cartBtn" onClick={addToCart}>加入購物車</button>
      <div className='detailText'>{info}</div>
    </div> 
    </>   
    ))}
    </div>
)}

export default Clothes