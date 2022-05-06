import React, {useState, useEffect} from 'react'
import Count from './Count'



const Clothes = (props) => {

  const addToCart = () =>{

    let product = {
      title: props.Details[0].title,
      number: props.Details[0].number,
      size: props.Details[0].size,
      color: props.Details[0].color,
      price: props.Details[0].price
    };
    localStorage.setItem("products", product);
  }

  //product = JSON.stringify(product);



  return (
    <div className='homeContainer'>
    {props.Details[0].map(({number, title, price, color, info, pic, stock}) => (
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
        <div className='detailColor' style={{ backgroundColor: color }}></div>
      </div>
      <select className='itemText' value={this.state.value} onChange={this.handleChange}>尺寸 |            
        <option className='itemSize' value="S">S</option>
        <option className='itemSize' value="M">M</option>
        <option className='itemSize' value="L">L</option>
        <option className='itemSize' value="XL">XL</option>
      </select>

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