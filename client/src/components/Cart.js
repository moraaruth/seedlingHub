import React from "react";
import CartItem from "./CartItem";

function Cart(props) {
  // Calculate the total price of the items in the cart
  const total = props.items.reduce((acc, item) => acc + item.price, 0);

  return (
    <aside>
      <h2>Cart</h2>

      {/* Map through the items in the cart to create CartItem components */}
      <ul>
        {props.items.map((item) => (
          <CartItem key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>

      {/* Show the total price and a button to empty the cart */}
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={props.emptyCart}>Empty Cart</button>
    </aside>
  );
}

export default Cart;
