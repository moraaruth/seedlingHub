import React, { useState, useEffect } from 'react';

const SeedlingList = () => {
  const [seedlings, setSeedlings] = useState([]);

  useEffect(() => {
    fetch('/seedlings')
      .then(response => response.json())
      .then(data => setSeedlings(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Seedlings</h2>
      <ul>
        {seedlings.map(seedling => (
          <li key={seedling.id}>
            <p><strong>Name:</strong> {seedling.name}</p>
            <p><strong>Price:</strong> {seedling.price}</p>
            <p><strong>Description:</strong> {seedling.description.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeedlingList;
