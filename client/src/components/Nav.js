import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className='nav'>
        <span>
            <Link to="/">女裝</Link>
        </span>
        | 
        <span>
            <Link to="/about">男裝</Link>
        </span>
        | 
        <span>
        <Link to="/about">配件</Link>
        </span>
    </nav>
  )
}

export default Nav