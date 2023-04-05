import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import SeedlingList from './SeedlingList';
import "./style.css"

const FarmerList = () => {
 
  const [farmers, setFarmers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/farmers')
      .then(res => res.json())
      .then(data => setFarmers(data))
      .catch(err => console.log(err));
  }, []);


  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/farmers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setFarmers([...farmers, data]);
        setFormData({
          username: '',
          email: '',
          password: ''
        });
      })
      .catch(err => console.log(err));
  };
  
 
  const handleEdit = (id, farmerData) => {
    const [username, email, password] = [farmerData.username, farmerData.email, farmerData.password_digest];
    const updatedData = prompt(`Enter new data for farmer with ID ${id}`, JSON.stringify({ username, email, password }));
    const { username: newUsername, email: newEmail, password: newPassword } = JSON.parse(updatedData);
    fetch(`/farmers/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: newUsername, email: newEmail, password: newPassword })
    })
      .then(res => res.json())
      .then(data => {
        const updatedFarmers = farmers.map(farmer => {
          if (farmer.id === data.id) {
            return data;
          }
          return farmer;
        });
        setFarmers(updatedFarmers);
      })
      .catch(err => console.log(err));
  };
  

  const handleDelete = id => {
    fetch(`/farmers/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedFarmers = farmers.filter(farmer => farmer.id !== id);
        setFarmers(updatedFarmers);
        setMessage('Farmer deleted successfully!');
      })
      .catch(err => console.log(err));
  };

  const handleViewSeedlings = id => {
    fetch(`/farmers/${id}/seedlings`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Render SeedlingList component inside a modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        document.body.appendChild(modal);
        ReactDOM.render(<SeedlingList seedlings={data} />, modal);
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="farmer-list">
      <h2>List of Farmers</h2>
  
      <div className="farmer-list-container">
        <ul className="farmer-list-items">
          {farmers.map(farmer => (
            <li key={farmer.id} className="farmer-list-item">
              <h3>{farmer.username}</h3>
              <p>Email: {farmer.email}</p>
              <p className="encrypted-password">Password: {farmer.password_digest}</p>
              <div className="actions">
                <button className="edit-button" onClick={() => setFormData(farmer)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(farmer.id)}>Delete</button>
                <button className="view-button" onClick={() => handleViewSeedlings(farmer.id)}>View Seedlings</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="add-farmer-form">
        <h3>{formData.id ? 'Edit Farmer' : 'Add Farmer'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Name:</label>
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-field">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
          <button type="submit">{formData.id ? 'Save' : 'Add Farmer'}</button>
          {formData.id && <button type="button" onClick={() => setFormData({})}>Cancel</button>}
        </form>
      </div>
    </div>
  );
  
};
export default FarmerList;
