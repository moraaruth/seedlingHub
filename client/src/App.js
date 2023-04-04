// // // import React, { useRef } from "react";
// // // import { Route, BrowserRouter } from "react-router-dom";

// // // import FarmerList from "./components/FarmerList";
// // // import Navbar from "./components/Navbar";


// // // function App() {
 

// // // const routerRef = useRef(null);

// // // if (!routerRef.current) {
// // //   return null;
// // // }

// // // return (

// // //   <BrowserRouter ref={routerRef}>
// // //   <Navbar />
// // //       <Route>
      
// // //         <Route path='/farmers' component={FarmerList } />
     
// // //       </Route>
     
// // //   </BrowserRouter>
// // //  );
   

// // // }

// // // export default App;

// import React, { useState } from 'react';
// import Navbar  from './components/Navbar';
// // import Login from './components/Login';
//  import FarmerList from './components/FarmerList';
//  import Footer from './components/Footer'


// // import Signup from './components/Signup';



//  function App() { 

// // const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   // const handleLogin = (email, password) => {
// //   //   // perform login logic here
// //   //   setIsLoggedIn(true);
// //   // };

// //   // return (
// //   //   <div>
// //   //     {isLoggedIn ? (
// //   //       <p>You are logged in!</p>
// //   //     ) : (
// //   //       <Login handleLogin={handleLogin} />
// //   //     )}
    
// //   //   </div>
    
// //   // );
// //   // const handleSignup = (name, email, password) => {
// //   //   console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
// //   // };

//   // return (
//   //   <div>
//   //     <Signup handleSignup={handleSignup} />
//   //   </div>
//   // );
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // const handleLogin = (username, password) => {
//   //   // perform login logic
//   //   setIsLoggedIn(true);
//   // };

//   // const handleLogout = () => {
//   //   // perform logout logic
//   //   setIsLoggedIn(false);
//   // };

//   // return (
//   //   <div>
     
//   //     <Navbar handleLogout={handleLogout} />
//   //     {isLoggedIn ? <p>You are logged in!</p> : <Login handleLogin={handleLogin} />}
//   //   </div>
//   // );
//   return (
// <div>
//   <Navbar />
//   <FarmerList />
//   <Footer />
  
//   </div>
//   )
  
// }
// export default App;
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NewFile from './components/Newfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const loginStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001//login', { 
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        if (data.logged_in) {
          handleLogin(data);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.log('api errors:', error);
      }
    };
    loginStatus();
  }, []);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    alert('Logged In successfully')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route exact path='/signup' element={<Signup handleLogin={handleLogin} />} />
          <Route exact path="/newfile" element={<NewFile user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;