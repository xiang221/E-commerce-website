import React,{useState} from 'react'

const Count = (props) => {

    const [count, setCount] = useState(1);
    
    const increase = () =>{
        if(count<props.stock){
        setCount(count+1);
        }
    };
    
    const decrease = () =>{
        if(count>0){
        setCount(count-1);
        };
    };

    

  return (
    <div className='amountBtn'>
       <div onClick={decrease} style={{cursor:'pointer'}}> - </div>
       <div>{count}</div>
       <div onClick={increase} style={{cursor:'pointer'}}> + </div> 
    </div>
  )




}

export default Count




