import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import List from '../components/List'
import '../styles/home.css'

const Home = () => {


  const [Data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async (category) => {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/women?paging=`
      );
      const newData = await response.json();
      setData(newData.data);
    };
    fetchData();
  },[]);


console.log()

  return (
    <div>
        <Header />
        <List Data={Data} setData={setData}/>
    </div>
  )
}

export default Home