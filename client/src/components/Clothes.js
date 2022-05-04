import React, {useState, useEffect} from 'react'
import Count from './Count'



const Clothes = (props) => {

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
        <div className='itemColor' style={{backgroundColor:color}}></div>
      </div>
      <div className='itemText'>尺寸 |
        <div className='itemSize'>S</div>
        <div className='itemSize'>S</div>
        <div className='itemSize'>S</div>
      </div>
      <div className='detailText'>數量 |
      <Count stock={stock}/>
      </div>
      <button>加入購物車</button>
      <div className='detailText'>{info}</div>
    </div> 
    </>   
    ))}
    </div>
)}

export default Clothes