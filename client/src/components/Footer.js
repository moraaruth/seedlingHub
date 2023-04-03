import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', marginTop: '5rem', padding: '2rem', textAlign: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Thank you for using our Seedling Marketplace App</p>
            <p style={{ fontSize: '1rem', fontWeight: 'light' }}>
              &copy; 2023 Seedling Marketplace. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
