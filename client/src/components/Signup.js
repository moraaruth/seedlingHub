// import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'

// function Signup() {
//   const [username, setUsername] = useState("");
//   const [farmer, setFarmer] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const navigate = useNavigate();
 

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/farmers", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         email,
//         password,
//         password_confirmation: passwordConfirmation,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((farmer) => setFarmer(farmer));
//         alert('Sign up successful')
//         navigate("/farmer")
//       }
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           type="text"
//           id="email"
//           autoComplete="off"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//         />
//         <label htmlFor="password">Password Confirmation</label>
//         <input
//           type="password"
//           id="password_confirmation"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           autoComplete="current-password"
//         />
        
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Signup = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
   
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
      // credentials: 'include',
      body: JSON.stringify({ farmer })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'created') {
          props.handleLogin(data);
          navigate("/farmer")
        } else {
          setState({ ...state, errors: data.errors });
        }
      })
      .catch(error => console.log('api errors:', error));
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