import React,{useEffect, useState} from 'react'
import {Row, Col} from "react-bootstrap"


const Middle = (props) => {

   



//console.log(Data.data[0]['title']);

// console.log(ddd[2]['title']); 
// const ddd = Object.values(Data);

    return (
    <div className='homeContainer' style={{flexWrap: 'wrap'}}>
      { props.Data.map(({ uid, title, price, color, pic}) => (
      <div className='itemContainer' key={uid}>
      <img className='itemPic' src= {`http://localhost:3000/static/${pic}`}/> 
      <div className="itemColor" style={{backgroundColor:color}}></div>
      <div className="itemText">{title}</div>
      <div className="itemText">TWD.{price}</div>
      </div>
      ))}
    </div>

  )
}



export default Middle

