import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Login = ({ handleLogin }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = state;
    const farmer = {
      username: username,
      email: email,
      password: password,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ farmer }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.logged_in) {
          handleLogin(data);
          navigate('/farmer', { state: { farmer: data.farmer } }); 
        } else {
          setState({ errors: data.errors });
          alert(data.errors)
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      })
      .catch((error) => console.log('api errors:', error));
  };

  const { username, email, password } = state;

  return (
    <div className="login-container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="login-input"
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          className="login-input"
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="login-input"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button className="login-btn" type="submit">Log In</button>
        <div>
          or <Link className="login-link" to='/signup'>sign up</Link>
        </div>
      </form>
      {state.errors && (
        <div className="login-errors">
          <ul>
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;
