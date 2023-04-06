// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './style.css'


// const Signup = () => {
//   const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [subject, setSubject] = useState('');

//   const [state, setState] = useState({
//     username: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//     errors: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setState({ ...state, [name]: value });
//   };

//   const navigate = useNavigate()

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: '',
//         email: '',
//         password: '',
//         password_confirmation: ''
       
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         console.log(r)
//         // r.json().then((farmer) => setState(farmer));
//         navigate('/farmerspage')
//       }
//     });
//   }

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const { username, email, password, password_confirmation } = state;
//   //   let farmer = {
//   //     username: username,
//   //     email: email,
//   //     password: password,
//   //     password_confirmation: password_confirmation
//   //   };
//   //   fetch('/signup', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     credentials: 'include',
//   //     body: JSON.stringify({ farmer })
//   //   })
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       if (data.status === 'created') {
//   //         // handleLogin(data);
//   //         redirect();
//   //       } else {
//   //         setState({ ...state, errors: data.errors });
//   //       }
//   //     })
//   //     .catch(error => console.log('api errors:', error));
//   // };

//   // const redirect = () => {
//   //   navigate("/FarmerList")
//   // };

//   const handleErrors = () => {
//     return (
//       <div>
//         <ul>
//           {state.errors.map((error, index) => (
//             <li key={index}>{error}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="username"
//           type="text"
//           name="username"
//           value={state.username}
//           onChange={handleChange}
//         />
//         <input
//           placeholder="email"
//           type="text"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//         />
//         <input
//           placeholder="password"
//           type="password"
//           name="password"
//           value={state.password}
//           onChange={handleChange}
//         />
//         <input
//           placeholder="password confirmation"
//           type="password"
//           name="password_confirmation"
//           value={state.password_confirmation}
//           onChange={handleChange}
//         />

//         <button placeholder="submit" type="submit">
//           Sign Up
//         </button>
//       </form>
//       {state.errors && handleErrors()}
//     </div>
//   );
// };

// export default Signup;


// import React, { useState, useEffect } from 'react';
// import { Button, Form, Message } from 'semantic-ui-react';
// import {useNavigate} from 'react-router-dom'

// const Signup = () => {

//   useEffect(() => {
//     return () => {
//       setFormSuccess(false);
//     };
//   }, []);

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordConfirmation, setPasswordConfirmation] = useState('');
//     const [formError, setFormError] = useState(null);
//     const [formSuccess, setFormSuccess] = useState(false);
//     const navigate = useNavigate();
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // perform form validation
//       if (!username || !email || !password || !passwordConfirmation) {
//         setFormError('Please fill in all fields');
//         return;
//       }
//       // create a new contact message object
//       const newMessage = {
//         username: username,
//         email: email,
//         password: password,
//         passwordConfirmation: passwordConfirmation
//       };
//       // save the new message to the database
//       fetch('/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newMessage)
//       })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setFormSuccess(true);
//           navigate("/farmers");
//           setUsername('');
//           setEmail('');
//           setPassword('');
//           setPasswordConfirmation('');
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         setFormError('Oops, something went wrong');
//       });
//     };
 
    

//     // const handleSubmit = (event) => {
//     //   event.preventDefault();
//     //   // perform form validation
//     //   if (!username || !email || !password || !passwordConfirmation) {
//     //     setFormError('Please fill in all fields');
//     //     return;
//     //   }
//     //   // create a new contact message object
//     //   const newMessage = {
//     //     username: username,
//     //     email: email,
//     //     password: password,
//     //     passwordConfirmation: passwordConfirmation
//     //   };
//     //   // save the new message to the database
//     //   fetch('/signup', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(newMessage)
//     //   })
//     //   .then(response => response.json())
   
//     //   .then(data => {
//     //     if (data.success) {
//     //       setFormSuccess(true);
//     //        navigate("/farmers")
//     //     }
//     //     // else {
//     //     //   setFormError(data.message);
//     //     // }
//     //   })
//     //   .catch(error => {
//     //     console.error(error);
//     //     setFormError('Oops, something went wrong');
//     //   });
//     // };
//     const myStyle={

//       height:'100vh',
//       marginTop:'-70px',
//       fontSize:'50px',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       opacity: 0.9,
//     };
//     return (
//       <div>
//       <div style={myStyle}>
//         <div className="contact-page" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: "https://rb.gy/idlq"}}>
//           <Form onSubmit={handleSubmit} error={!!formError} success={formSuccess}>
//           <h1>Sign up</h1>
//             <Form.Input label="Username" name="username" value={username} onChange={event => setUsername(event.target.value)} required />
//             <Form.Input label="Email" name="email" type="email" value={email} onChange={event => setEmail(event.target.value)} required />
//             <Form.Input label="Password" type= "password" name="password" value={password} onChange={event => setPassword(event.target.value)} required />
//             <Form.Input label="PasswordConfirmation" type= "password" name="passwordConfirmation" value={passwordConfirmation} onChange={event => setPasswordConfirmation(event.target.value)} required />
//             {formError && <Message error header="Error" content={formError} />}
//             {formSuccess && <Message success header="Success" content="Your message has been sent" />}
//             <Button style={{width: "100px", height: "50px"}}>Signup</Button>
//           </Form>
//         </div>
//       </div>
     
//       </div>
//     );
//   // } else {
//   //   return <h1>Please Login or Sign Up</h1>;
//   // }
// };
// export default Signup;

import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState("");
  const [farmer, setFarmer] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
 

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((farmer) => setFarmer(farmer));
        navigate("/farmers")
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;