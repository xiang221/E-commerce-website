import React,{useState} from 'react'

const Count = (props) => {


    console.log(props.stock);

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
    <div>
       <div onClick={decrease}> - </div>
       <div>{count}</div>
       <div onClick={increase}> + </div> 
    </div>
  )




}

export default Count




