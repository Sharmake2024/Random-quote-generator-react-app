// import { useState } from 'react'
import React, { useEffect, useState } from 'react';
// import QuoteGenerator from './Random';
import "./index.css";
import Random from './Random';

function App() {
  // const [count, setCount] = useState(0)
 
  
  //Destructing = hala ja jabis
  //eg 
  // const {title, image} = props.data  = helps you clean data to display because it cuts props.data.


  const [qoutes, setQoutes] = useState([]);



  useEffect( ()=> {
    const Api = "https://api.quotable.io/random";

    async function getData(){

  try {
      const res = await fetch( `${Api}`);
      const data = await res.json();
      console.log(data);
      setQoutes(data)
  }

catch(error) {
    console.error(error)
}}
        getData();

  }, []);



 
  return (
   <div>

    <Random Myqoute ={qoutes}/>

   </div>

  );
}

export default App;
