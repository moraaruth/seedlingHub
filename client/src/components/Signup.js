import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
  const navigate = useNavigate();
  // const [state, setState] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   password_confirmation: '',
  // });
  const[password_confirmation, setPassword_confirmation] = useState("");
  const[password, setPassword] = useState("");
  const[email, setEmail] = useState("");
  const[username, setUsername] = useState("");
  const [farmers, setFarmers] = useState([]);

   useEffect(() => {
    fetch('/farmers')
      .then(res => res.json())
      .then(farmers => setFarmers(farmers))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      username,
      email,
      password,
      password_confirmation,
    };
    fetch('/farmers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // credentials: 'include',
      body: JSON.stringify( user ),
    })
    .then((r) => {
      console.log(user)
      navigate('/farmer');
      if (r.ok) {
        r.json().then((user) => setFarmers(user));
      
      }
    });

  };
 
  return (
        <div style={{ margin: '50px auto', maxWidth: '500px' }}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
         
            />
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           
            />
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
         
            />
            <input
              placeholder="password confirmation"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
          
            />
    
            <button placeholder="submit" type="submit">
              Sign Up
            </button>
          </form>
       
        </div>
      );
    };
    
    export default Signup;