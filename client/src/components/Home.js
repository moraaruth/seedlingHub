import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <div className="home-container">
      <Link to='/login' className="home-link">Log In</Link>
      <br />
      <Link to='/signup' className="home-link">Sign Up</Link>
    </div>
  );
}

export default Home;
