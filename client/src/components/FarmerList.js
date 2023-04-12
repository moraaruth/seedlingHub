import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import "./Farmer.css"

const FarmerList = () => {
const navigate = useNavigate();
 
  const [farmers, setFarmers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
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
    let url = '/farmers';
    let method = 'POST';
    if (formData.id) {
      url = `/farmers/${formData.id}`;
      method = 'PATCH';
    }
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (method === 'POST') {
          setFarmers([...farmers, data]);
        } else {
          setFarmers(prevFarmers => {
            const index = prevFarmers.findIndex(farmer => farmer.id === formData.id);
            const updatedFarmers = [...prevFarmers];
            updatedFarmers[index] = data;
            return updatedFarmers;
          });
        }
        setFormData({
          id: '',
          username: '',
          email: '',
          password: ''
        });
        setMessage('Farmer added successfully!');
        setTimeout(() => {
          setMessage('');
        }, 3000);
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
        setTimeout(() => {
          setMessage('');
        }, 3000);
        
      })
      .catch(err => console.log(err));
  };
  const handleEdit = (id) => {
    const farmerToEdit = farmers.find(farmer => farmer.id === id);
    setFormData({
      id: farmerToEdit.id,
      username: farmerToEdit.username,
      email: farmerToEdit.email,
      password: farmerToEdit.password_digest
    });
  };
  
  
  const handleViewSeedlings = (id) => {
    navigate(`/farmer/${id}/seedlings`);
  };
  
  return (
    <div className="farmer-list">
      <h2>List of Farmers</h2>
      {message && <div className="alert">{message}</div>}

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
   
  
      <div className="farmer-list-container">   
        <ul className="farmer-list-items">
          {farmers.map((farmer => (
            <li key={farmer.id} className="farmer-list-item">
           
              <h3>{farmer.username}</h3>
              <p>Email: {farmer.email}</p>
              <p className="encrypted-password">Password: {farmer.password_digest}</p>
              <div className="actions">
             
              <button className="edit-button" onClick={() => handleEdit(farmer.id, formData)}>Edit</button>

                <button className="delete-button" onClick={() => handleDelete(farmer.id)}>Delete</button>
                <br/><br/>
                <button className="view-button" onClick={() => handleViewSeedlings(farmer.id)}>View</button>

                 </div> 
            </li>
          )))}
        </ul>
      </div>
  
     
    </div>
  );
  
};
export default FarmerList;
