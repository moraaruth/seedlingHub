import React, { useState } from 'react';
import './style.css'


const Signup = (props) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, password_confirmation } = state;
    let farmer = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
    fetch('/farmers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ farmer })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'created') {
          props.handleLogin(data);
          redirect();
        } else {
          setState({ ...state, errors: data.errors });
        }
      })
      .catch(error => console.log('api errors:', error));
  };

  const redirect = () => {
    props.history.push('/');
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {state.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={state.password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
      {state.errors && handleErrors()}
    </div>
  );
};

export default Signup;