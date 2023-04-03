import React, { useState, useEffect } from 'react';

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    fetch('/farmers')
      .then(res => res.json())
      .then(data => setFarmers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>List of Farmers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map(farmer => (
            <tr key={farmer.id}>
              <td>{farmer.id}</td>
              <td>{farmer.name}</td>
              <td>{farmer.email}</td>
              <td>{farmer.phone}</td>
              <td>{farmer.location}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerList;
