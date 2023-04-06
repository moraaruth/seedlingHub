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
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NewFile from './components/Newfile';
import FarmerList from './components/FarmerList'
import Footer from './components/Footer'
// import FarmersPage from './components/FarmersPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [farmer, setFarmer] = useState({});

  useEffect(() => {
    const loginStatus = async () => {
      try {
        const response = await fetch('/login', { 
          method: 'GET',
          credentials: 'include'
        });
        // const data = await response.json();
        const data = await response;
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
    setFarmer(data.farmer);
    alert('Logged In successfully')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFarmer({});
  };
 
  if (farmer) {
    return (
      <div>
        <h2>SeedlingHub</h2>
         <Navbar farmer={farmer} setFarmer={setFarmer} />
      <BrowserRouter>
     
     
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/farmers' element={<FarmerList />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup  />} />
            <Route exact path="/newfile" element={<NewFile farmer={farmer} />} />
          </Routes>
        </BrowserRouter>
        {/* <FarmerList /> */}
        <Footer />
      </div>
    );
  } else {
    return <Login onLogin={setFarmer} />;
  }
}
export default App;
// import React, { useState, useEffect } from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import NewFile from './components/Newfile';
// import Footer from './components/Footer'

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const loginStatus = async () => {
//       try {
//         const response = await fetch('/me', { 
//           method: 'GET',
//           credentials: 'include'
//         });
//         const data = await response.json();
//         if (data.logged_in) {
//           handleLogin(data);
//         } else {
//           handleLogout();
//         }
//       } catch (error) {
//         console.log('api errors:', error);
//       }
//     };
//     loginStatus();
//   }, []);

//   const handleLogin = (data) => {
//     setIsLoggedIn(true);
//     setUser(data.user);
//     alert('Logged In successfully')
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUser({});
//   };

//   return (
//     <div>
//       <h2>SeedlingHub</h2>
//        <Navbar />
//     <BrowserRouter>
   
   
//         <Routes>
//           <Route exact path='/' element={<Home />} />
//           <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
//           <Route exact path='/signup' element={<Signup handleLogin={handleLogin} />} />
//           <Route exact path="/newfile" element={<NewFile user={user} />} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import Login from "../pages/Login";
// import RecipeList from "../pages/RecipeList";
// import NewRecipe from "../pages/NewRecipe";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   if (!user) return <Login onLogin={setUser} />;

//   return (
//     <>
//       <NavBar user={user} setUser={setUser} />
//       <main>
//         <Switch>
//           <Route path="/new">
//             <NewRecipe user={user} />
//           </Route>
//           <Route path="/">
//             <RecipeList />
//           </Route>
//         </Switch>
//       </main>
//     </>
//   );
// }

// export default App;
