import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Clothes from '../components/Clothes'
import '../styles/home.css'

const Product = () => {

  const [Details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/products/details/eYW5Nn3D4Wu8PecdJPqQZH"
      );
      const newData = await response.json();
      setDetails(newData.data);
    };
    fetchData();
  },[]);

  console.log(Details);

  return (
    <div>
    <Header/>
    <Clothes Details={Details} setDetails={setDetails}/>
    </div>
  )
}

export default Product