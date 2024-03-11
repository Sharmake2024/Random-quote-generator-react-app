import { useState, useEffect } from "react";

function Random() {
 
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

        const display = ()=> {
            return(
                <div>
            <p>{qoutes.content}</p>
            <h2>{qoutes.author}</h2>
            </div>
            );
        }





    return(

        <div className="container">
        <section>
            
            <button onClick={display}> Get Quote</button>
        </section>
    </div> 
    );
}

export default Random;