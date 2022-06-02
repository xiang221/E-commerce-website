import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='nav' style={{textDecoration: 'none'}}>
        <span>
            <Link to="/women">女裝</Link>
        </span>
        | 
        <span>
            <Link to="/men">男裝</Link>
        </span>
        | 
        <span>
            <Link to="/accessories">配件</Link>
        </span>
    </nav>
  )
}

export default Nav