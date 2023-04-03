import React, { useState, useEffect } from "react";

const ConsumerList = () => {
  const [consumers, setConsumers] = useState([]);

  useEffect(() => {
    const getConsumers = async () => {
      try {
        const response = await fetch("/consumers");
        const data = await response.json();
        setConsumers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getConsumers();
  }, []);

  return (
    <div>
      <h2>Consumer List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {consumers.map((consumer) => (
            <tr key={consumer.id}>
              <td>{consumer.username}</td>
              <td>{consumer.email}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumerList;
