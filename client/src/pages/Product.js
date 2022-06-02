import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Count from '../components/Count'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { saveState } from '../cartSlice'
import '../styles/product.css'
import { process_params } from 'express/lib/router';


const Product = (props) => {

  const dispatch = useDispatch()
  const params = useParams().uid
  const [Details, setDetails] = useState([])
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1);
  const [product,setProduct] = useState()



  useEffect(() =>{
    fetch(`http://localhost:5000/api/v1/products/details/${params}`).then(
      (response) => response.json()).then((data)=>{
        setDetails(data.data)
      })
  },[]);


  useEffect(() =>{
    if(Details.length!==0){
      setProduct({
        title: Details[0].title,
        number: Details[0].number,
        size: size,
        quantity: quantity,
        color: Details[0].color,
        price: Details[0].price,
        pic: Details[0].pic
      })
    }
  });

  let NewCart

  const addToCart = () =>{
    if(size===''){
      alert('please select size')
      return 
    }
    dispatch(saveState(product))
    alert('已加入購物車')
  }


    // NewCart = [
    //   ...props.cart,
    //   product,
    // ]
    // try {
    //   localStorage.setItem('cart', JSON.stringify(NewCart))
    //   props.setCart(NewCart)
    //   console.log('click')
    // } catch (err) {
    //   console.error(err)
    // }


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
        <div className='itemSize' value={Details[0].size} aria-pressed={(size===Details[0].size?"true":"false")} onClick={()=>setSize(Details[0].size)}>{Details[0].size}</div>
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