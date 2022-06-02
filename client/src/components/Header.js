import React from 'react'
import logo from '../images/btn-logo.png'
import member from '../images/btn-member.png'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'
import Nav from './Nav'
import Shopping from './Shopping'


const Header = () => {
  return (
    <div>
        <div className='base'>
        <div className='logoContainer'>
        <img src={logo} className='logo' />
        <Nav/>
        </div>
        <div className='iconContainer'>
          <input className='search'>
          </input>
          <Shopping/>
          <CgProfile style={{fontSize:'30px', margin:'0 10px'}}/>
        </div>
        </div>
        <div className='base' style={{ backgroundColor:"#313538", height:"30px", margin:"0rem" }}></div>
       
    </div>
  )
}

export default Header