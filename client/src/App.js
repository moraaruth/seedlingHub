import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import FarmersPage from './components/FarmersPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [farmer, setFarmer] = useState({});


  useEffect(() => {
    const loginStatus = async () => {
      try {
        const response = await fetch('/logged_in', { 
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
    setFarmer(data.farmer);
    alert('Logged In successfully')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFarmer({});
  };



  return (
 
    <div>
    
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route exact path='/signup' element={<Signup handleLogin={handleLogin} />} />
          <Route exact path="/farmer" element={<FarmersPage farmer ={farmer} />} />
        </Routes>
    
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;