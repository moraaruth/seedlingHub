import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [password_confirmation, setPassword_confirmation] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [farmers, setFarmers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/farmers')
      .then(res => res.json())
      .then(farmers => setFarmers(farmers))
      .catch(error => setError(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !password_confirmation) {
      setError("All fields are required");
      return;
    }
    if (password !== password_confirmation) {
      setError("Passwords do not match");
      return;
    }
    let user = {
      username,
      email,
      password,
      password_confirmation,
    };
    fetch('/farmers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setFarmers([...farmers, user]));
          navigate('/farmer');
        } else {
          setError("Something went wrong. Please try again later.");
        }
      })
      .catch(error => setError(error));
  };

  return (
    <div style={{ margin: '50px auto', maxWidth: '500px' }}>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <ul>
        {farmers.map((farmer) => (
          <li key={farmer.id}>{farmer.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Signup;
