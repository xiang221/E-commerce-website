import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import Footer from '../components/Footer'
import Header from '../components/Header'

const Thank = () => {
  return (
    <div className='wrapper'>
    <Header />
    <div className='thankyou'>
        付款成功，感謝您的購物
        <Link to='/women'>回首頁</Link>
    </div>
    <Footer/>
    </div>
  )
}

export default Thank