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


  

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setState({ ...state, [name]: value });
  // };

  //   const handleErrors = () => {
  //   return (
  //     <div>
  //       <ul>
  //         {state.errors.map((error, index) => (
  //           <li key={index}>{error}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const { username, email, password, password_confirmation } = state;
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
      if (r.ok) {
        r.json().then((user) => setFarmers(user));
        navigate('/farmer');
      }
    });
      // .then(response => response.json())
      // .then(farmers => setFarmers(farmers))
      // .then(data => {

      //   props.handleLogin(data)
      // })
     
      
      // .then(data => {
      //   if (data.status === 'created') {
      //     props.handleLogin(data);
      //     navigate('/farmer');
      //   } else {
      //     setState({ ...state, errors: data.errors });
      //   }
      // })
      // .catch(error => console.log('api errors:', error));
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
              // onChange={handleChange}
            />
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleChange}
            />
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handleChange}
            />
            <input
              placeholder="password confirmation"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
              // onChange={handleChange}
            />
    
            <button placeholder="submit" type="submit">
              Sign Up
            </button>
          </form>
          {/* {errors && handleErrors()} */}
        </div>
      );
    };
    
    export default Signup;