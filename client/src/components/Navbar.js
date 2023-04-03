import React from 'react';

const Navbar = ({ handleLogout }) => {
  return (
    <nav style={{ backgroundColor: '#f8f9fa', padding: '1rem' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
        <li>
          <h1 style={{ margin: 0 }}>SeedlingHub</h1>
        </li>
        <li>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '1rem' }}>
              <a href="#farmers">Farmers</a>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <a href="#consumers">Consumers</a>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <a href="#seedlings">Seedlings</a>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <a href="#login">Login</a>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <a href="#signup">Sign up</a>
            </li>
            <li>
              <button onClick={handleLogout} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: 'inherit', textDecoration: 'underline' }}>Logout</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
