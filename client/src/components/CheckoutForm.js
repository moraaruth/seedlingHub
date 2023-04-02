import React, { useState } from "react";

function CheckoutForm(props) {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section>
      <h2>Checkout</h2>

      {/* Show a message if the form has been submitted */}
      {isSubmitted && (
        <p>
          Thank you for your order, {name}! We will send a confirmation email to{" "}
          {email} and contact you at {phone} if there are any issues with your
          order. Your seedlings will be shipped to:
          <br />
          {address}
        </p>
      )}

      {/* Show the form if it has not been submitted */}
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          {/* Name field */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          {/* Phone field */}
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>

          {/* Address field */}
          <div>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit">Place Order</button>
        </form>
      )}
    </section>
  );
}

export default CheckoutForm;
