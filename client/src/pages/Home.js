import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import '../styles/home.css'

const Home = () => {


  const [Data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/products/women?paging=`
      );
      const newData = await response.json();
      setData(newData.data);
    };
    fetchData();
  },[]);



  return (
    <div>
        <Header />
        <div className='homeContainer' style={{flexWrap: 'wrap'}}>
        { Data.map(({ uid, title, price, color, pic}) => (
        <a className='itemContainer' key={uid}  href={`http://localhost:3001/product/${uid}`}>
        <img className='itemPic' src= {`http://localhost:5000/static/${pic}`}/> 
        <div className="itemColor" style={{backgroundColor:color}}></div>
        <div className="itemText">{title}</div>
        <div className="itemText">TWD.{price}</div>
        </a>
        ))}
      </div>
    </div>
  )
}

export default Home