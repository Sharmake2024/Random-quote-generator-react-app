import React from "react";

function Random(props) {
 console.log(props);
  // const {title, image} = props.data 

  const {author, content}= props.Myqoute;

    return(

        <div className="container">
        <section>
            <p>{content}</p>
            <h2>~{author}</h2>
            <button> Get Quote</button>
        </section>
    </div> 
    );
}

export default Random;