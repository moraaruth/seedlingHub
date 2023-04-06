// import React from "react";


// function Navbar() {
//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#333",
//     color: "#fff",
//     padding: "10px",
//   };

//   const listStyle = {
//     display: "flex",
//     listStyle: "none",
//     margin: "0",
//     padding: "0",
//   };

//   const listItemStyle = {
//     marginLeft: "10px",
//     marginRight: "10px",
//     fontSize: "20px",
//   };

//   return (
   
    
//     <nav style={navStyle}>
     
//       <ul style={listStyle}>
//         <li style={listItemStyle}>Home</li>
//         <li style={listItemStyle}>Farmers</li>
//         <li style={listItemStyle}>Consumers</li>
//         <li style={listItemStyle}>Seedlings</li>
//       </ul>
//       <ul style={listStyle}><li style={listItemStyle}>Logout</li></ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';

import './style.css'; // Import CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', listStyle: 'none' }}>
        <li><a href="/">Home</a></li>
        <li style={{ marginLeft: 'auto' }}><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

