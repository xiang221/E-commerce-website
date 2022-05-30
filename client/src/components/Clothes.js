import React, {useState, useEffect} from 'react'

import Count from './Count'



const Clothes = (props) => {



  React.useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('id');
    getProduct(props.Details[0].uid).then((json) => {
      console.log(json)
    });
  }, []);


  function getProduct(uid) {
    return fetch(`http://localhost:5000/products/details/${uid}`).then(
      (response) => response.json()
    );
  }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `http://localhost:5000/api/v1/products/details/${params}`
  //     );
  //     const newData = await response.json();
  //     setDetails(newData.data);
  //   };
  //   fetchData();
  // },[]);



  const addToCart = (props) =>{

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
  console.log(props.Details[0])

  //* {props.Details[0].map(({number, title, price, color, info, pic, stock}) => (
  return (
    <div className='homeContainer'>
    <>
    <div className='detailContainer'>
      <img className='detailPic' src= {`http://localhost:5000/static/${props.Details[0].pic}`}/>
    </div>        
    <div className='detailContainer'>
      <div className='detailText' style={{ fontSize: '1.5rem'}}> {props.Details[0].title}</div>
      <div className='detailText' style={{ color: '#bababa' }}>{props.Details[0].number}</div>
      <div className='detailText' style={{ fontSize: '1.2rem', paddingTop:'2.5rem'}}>TWD.{props.Details[0].price}</div>
      __________________________________
      <div className='itemText'>顏色 | 
        <div className='detailColor' style={{ backgroundColor: props.Details[0].color }}></div>
      </div>
      <div className='itemText'>尺寸 |
        <div className='itemsizeContainer'>            
        <div className='itemSize' value="S">S</div>
        <div className='itemSize' value="M">M</div>
        <div className='itemSize' value="L">L</div>
        <div className='itemSize' value="XL">XL</div>
        </div>
      </div>

      <div className='detailText'>數量 |
      <Count stock={props.Details[0].stock}/>
      </div>
      <button className="cartBtn" onClick={addToCart}>加入購物車</button>
      <div className='detailText'>{props.Details[0].info}</div>
    </div> 
    </>   
    </div>
)}

export default Clothes