import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 90px)', 
    backgroundImage: 'url("https://images.pexels.com/photos/9324330/pexels-photo-9324330.jpeg?auto=compress&cs=tinysrgb&w=600")', // Replace with direct link to image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    padding: '0 20px',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '20px',
    color: 'black'
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    margin: '0',
    marginBottom: '40px',
    color: 'black'
  };

  const linkStyle = {
    color: '#fff',
    fontSize: '1.2rem',
    textDecoration: 'none',
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: 'blue',
    borderRadius: '5px',
   
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={headingStyle}>Welcome to your favorite seedling marketplace</h1>
        <p style={subheadingStyle}>Browse our selection of high-quality seedlings and grow your own garden today</p>
      </div>
      <div>
        <Link to='/login' style={linkStyle}>Log In</Link>
        <Link to='/signup' style={linkStyle}>Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;
