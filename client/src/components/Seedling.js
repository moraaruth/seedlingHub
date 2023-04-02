import React from "react";

function Seedling(props) {
  return (
    <article>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
      <button onClick={props.onAddToCart}>Add to Cart</button>
    </article>
  );
}

export default Seedling;
