import React from "react";

function CartItem(props) {
  return (
    <li>
      {props.seedling.name} ({props.quantity} x ${props.seedling.price})
    </li>
  );
}

export default CartItem;
