import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './style.css'

const Login = ({ handleLogin }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: ''
  });

  const navigate = useNavigate(); // Get navigate function from react-router-dom


  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value || ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = state;
    const user = {
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
      body: JSON.stringify({ user }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.logged_in) {
          handleLogin(data);
          navigate('/farmers');
          // navigate('/newfile', { state: { user: data.user} }); // Navigate to /newfile with user data as a prop
        } else {
          setState({
            errors: data.errors,
          });
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
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
        <div>
           <Link to='/signup'>sign up</Link>
        </div>
      </form>
      {state.errors && <div><ul>{state.errors.map((error) => <li key={error}>{error}</li>)}</ul></div>}
    </div>
  );
};

export default Login;