import React from 'react'
import logo from '../images/btn-logo.png'
import shopping from '../images/btn-shopping.png'
import member from '../images/btn-member.png'
import Nav from './Nav'

const Header = () => {
  return (
    <div>
        <div className='base'>
        <img src={logo} className='logo'/>
        <Nav/>
        <div className='iconContainer'>
          <input className='search'>
          </input>
          <img src={shopping} className='icon'/>
          <img src={member} className='icon'/>
        </div>
        </div>
        <div className='base' style={{ backgroundColor:"#313538", height:"20px", margin:"0rem" }}></div>
       
    </div>
  )
}

export default Header