// import React from 'react';
// import './SeedlingList.css';

// const SeedlingList = ({ seedlings }) => {
//   return (
//     <div className="seedling-list">
//       <h2>Seedlings</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Planting Season</th>
//             <th>Growth Duration</th>
//             <th>Harvest Time</th>
//             <th>Soil Type</th>
//             <th>Water Requirements</th>
//             <th>Light Requirements</th>
//             <th>Nutritional Value</th>
//           </tr>
//         </thead>
//         {seedlings && seedlings.length > 0 && (
//           <tbody>
//             {seedlings.map((seedling) => (
//               <tr key={seedling.id}>
//                 <td>{seedling.name}</td>
//                 <td>{seedling.description}</td>
//                 <td>{seedling.price}</td>
//                 <td>{seedling.planting_season}</td>
//                 <td>{seedling.growth_duration}</td>
//                 <td>{seedling.harvest_time}</td>
//                 <td>{seedling.soil_type}</td>
//                 <td>{seedling.water_requirements}</td>
//                 <td>{seedling.light_requirements}</td>
//                 <td>{seedling.nutritional_value}</td>
//               </tr>
//             ))}
//           </tbody>
//         )}
//       </table>
//     </div>
//   );
// };

// export default SeedlingList;import React from 'react';
import './SeedlingList.css';

const SeedlingList = ({ seedlings }) => {
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
        </div>
      )}
    </div>
  );
};

export default SeedlingList;
