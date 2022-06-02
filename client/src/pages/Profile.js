import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/profile.css'

const Profile = () => {
  return (
    <div className='wrapper'>
    <Header/>
    <div className='profileContainer'>
        <div className='profileTextContainer'>
            <h2 className='profileText'>登入會員</h2>
            <a href="/api/v1/signup">註冊</a>
        </div>
    <form role="form" action="/api/v1/login" method="POST">
        <div className='logContent'>
        <label for="email" className='logText'>信箱</label>
        <input type="email" className='logInput' id="email" name="email"/>
        </div>
        <div className='logContent'>
        <label for="password" className='logText'>密碼</label>
        <input type="password" className='logInput' id="password" name="password"/>
        </div>
        <div className='logBtnContsainer'>
        <button type="submit" className="logBtn" >登入</button>
        </div>
    </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Profile