import React, { useState } from "react";
import Home from "./components/Home";
import SeedlingCatalog from "./components/SeedlingCatalog";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  // State to keep track of the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add a seedling to the cart
  function addToCart(seedling) {
    setCartItems((prevCartItems) => [...prevCartItems, seedling]);
  }

  // Function to empty the cart
  function emptyCart() {
    setCartItems([]);
  }

  return (
    <div className="App">

      <Home />
      <LoginForm />
      <SignupForm />
      {/* Header component */}
     
      <main>
        {/* SeedlingCatalog component */}
        <SeedlingCatalog addToCart={addToCart} />

        {/* Cart component */}
        <Cart items={cartItems} emptyCart={emptyCart} />

        {/* CheckoutForm component */}
        <CheckoutForm items={cartItems} emptyCart={emptyCart} />
      </main>
    </div>
  );
}

export default App;
