import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";
import '../styles/home.css'

const Home = () => {


  const [Data, setData] = useState([]);
  const params = useParams().category


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://35.78.45.3/api/v1/products/${params}?paging=`
      );
      const newData = await response.json();
      setData(newData.data);
    };
    fetchData();
  });


  //localStorage.setItem('test','111')
  return (
    <div className='wrapper'>
        <Header />
        <div className='outerContainer'>
        <div className='homeContainer' style={{flexWrap: 'wrap'}}>
        { Data.map(({ uid, title, price, color, pic}) => (
        <a className='itemContainer' key={uid}  href={`/#/product/${uid}`}>
        <img className='itemPic' src= {`http://35.78.45.3/static/${pic}`}/> 
        <div className="itemColor" style={{backgroundColor:color}}></div>
        <div className="itemText">{title}</div>
        <div className="itemText">TWD.{price}</div>
        </a>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home