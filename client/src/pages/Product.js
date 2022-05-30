import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Count from '../components/Count'
import { useParams } from "react-router-dom";
import '../styles/product.css'


const Product = () => {

  const params = useParams().uid
  const [Details, setDetails] = useState([])
  const [Size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1);

  useEffect(() =>{
    fetch(`http://localhost:5000/api/v1/products/details/${params}`).then(
      (response) => response.json()).then((data)=>{
        console.log(data.data)
        setDetails(data.data)
      })
  },[]);



  const addToCart = () =>{
    if(Size===''){
      alert('please select size')
      return 
    }
    let product = [
      ...
      {
      title: Details[0].title,
      number: Details[0].number,
      size: Size,
      quantity: quantity,
      color: Details[0].color,
      price: Details[0].price
      }
    ]  
    let cart = localStorage.getItem("products")

    localStorage.setItem("products", ...product)
    console.log(product)
  }


  return (
    <>
    <Header/>
    {Details.length!==0?(
    <div className='homeContainer'>
    <div className='detailContainer'>
      <img className='detailPic' src= {`http://localhost:5000/static/${Details[0].pic}`}/>
    </div>        
    <div className='detailContainer'>
      <div className='detailText' style={{ fontSize: '1.5rem'}}> {Details[0].title}</div>
      <div className='detailText' style={{ color: '#bababa' }}>{Details[0].number}</div>
      <div className='detailText' style={{ fontSize: '1.2rem', paddingTop:'2.5rem'}}>TWD.{Details[0].price}</div>
      __________________________________
      <div className='itemText'>顏色 | 
        <div className='detailColor' style={{ backgroundColor: Details[0].color }}></div>
      </div>
      <div className='itemText'>尺寸 |
        <div className='itemsizeContainer'>            
        <div className='itemSize' value="S" aria-pressed={(Size==='S'?"true":"false")} onClick={()=>setSize('S')}>S</div>
        <div className='itemSize' value="M" aria-pressed={(Size==='M'?"true":"false")} onClick={()=>setSize('M')}>M</div>
        <div className='itemSize' value="L" aria-pressed={(Size==='L'?"true":"false")} onClick={()=>setSize('L')}>L</div>
        <div className='itemSize' value="XL" aria-pressed={(Size==='XL'?"true":"false")} onClick={()=>setSize('XL')}>XL</div>
        </div>
      </div>
      <div className='detailText'>數量 |
      <Count stock={Details[0].stock} quantity={quantity} setQuantity={setQuantity}/>
      </div>
      <button className="cartBtn" onClick={()=>addToCart()}>加入購物車</button>
      <div className='detailText'>{Details[0].info}</div>
    </div>    
    </div>):null}
    </>
  )
}

export default Product