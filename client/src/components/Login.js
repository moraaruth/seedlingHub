import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Login = ({ handleLogin }) => {
  const [farmers, setFarmers] = useState([]);
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
    let user = {
      username,
      email,
      password,
      password_confirmation,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user),
     
    })
    .then(() => navigate('/farmer'))
      // .then((response) => response.json())
      // // navigate('/farmer')
      // .then((r) => {
      //   console.log(user)
      //   navigate('/farmer');
      //   // if (r.ok) {
      //   //   r.json().then((user) => setFarmers(user));
        
      //   // }
      // });
     

  };

   const { username, email, password, password_confirmation } = state;

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
