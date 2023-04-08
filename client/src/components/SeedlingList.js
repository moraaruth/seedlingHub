import {useNavigate } from 'react-router-dom';
import './SeedlingList.css';

const SeedlingList = ({ seedlings }) => {
  const navigate = useNavigate(); 
  return (
    <div className="seedling-list">
      <h2>Seedlings</h2>
      {seedlings && seedlings.length > 0 && (
        <div className="seedling-grid">
          {seedlings.map((seedling) => (
            <p key={seedling.id}>
              <img src={seedling.imageUrl} alt={seedling.name} style={{ width: '300px', height: '300px', marginLeft:'0.3rem' }} />
              
              <br />
              <strong>{seedling.name}</strong><br /><br />
              {seedling.description}
              <br />
              Price: {seedling.price}
              <br />
              Planting Season: {seedling.planting_season}
              <br />
              Growth Duration: {seedling.growth_duration}
              <br />
              Harvest Time: {seedling.harvest_time}
              <br />
              Soil Type: {seedling.soil_type}
              <br />
              Water Requirements: {seedling.water_requirements}
              <br />
              Light Requirements: {seedling.light_requirements}
              <br />
              Nutritional Value: {seedling.nutritional_value}
            </p>
          ))}
           <h1  className="logout-button" onClick={() => {
            fetch("/logout",{
                method: 'POST',
                credentials: 'include',
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                navigate('/login');

            })
           }}>Logout</h1>
             
        </div>
      )}
    </div>
  );
};

export default SeedlingList;
