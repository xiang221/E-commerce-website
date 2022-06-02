import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header'

const Thank = () => {
  return (
    <>
    <Header />
    <div className='thankyou'>
        付款成功，感謝您的購物
        <Link to='/'>回首頁</Link>
    </div>
    </>
  )
}

export default Thank