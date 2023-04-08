import { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom';
import FarmerList from "./FarmerList";
import SeedlingList from "./SeedlingList";
import './style.css'

function FarmersPage() {
  const seedlingList = [
    {
      id: 1,
      name: 'Sunflower',
      description: 'Sunflowers are popular for their beauty and for their nutritious seeds, which can be eaten or used to make oil.',
      price: '$2.99',
      planting_season: 'Spring',
      growth_duration: '70-90 days',
      harvest_time: 'Late summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Full sun',
      nutritional_value: 'High in protein, fiber, vitamin E, and other nutrients',
      imageUrl: 'https://media.istockphoto.com/id/637719416/photo/growing-plant-green-sprout-growing-from-seed.jpg?b=1&s=612x612&w=0&k=20&c=-uwVzTGlkH0iuAQY3Zoe81lutTApPIw-x7_uoj5INAA=',
      style: { maxWidth: '100%', height: 'auto', marginLeft: '0.7rem'} // inline style object for resizing the image
    }
    
    ,
    {
      id: 2,
      name: 'Tomato',
      description: 'Tomatoes are a versatile fruit that can be eaten raw or cooked in a variety of dishes.',
      price: '$1.99',
      planting_season: 'Spring',
      growth_duration: '60-80 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Full sun',
      nutritional_value: 'High in vitamin C, potassium, and other nutrients',
      style: { maxWidth: '100%', height: 'auto' },
      imageUrl: 'https://images.pexels.com/photos/5561311/pexels-photo-5561311.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Lavender',
      description: 'Lavender is a fragrant and beautiful herb that can be used for aromatherapy, cooking, and medicinal purposes.',
      price: '$3.99',
      planting_season: 'Spring',
      growth_duration: '90-120 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Moderate watering',
      light_requirements: 'Full sun',
      nutritional_value: 'Low in nutrients',
      imageUrl: 'https://images.pexels.com/photos/4202258/pexels-photo-4202258.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Cucumber',
      description: 'Cucumbers are a refreshing and nutritious vegetable that can be eaten raw or pickled.',
      price: '$1.49',
      planting_season: 'Spring',
      growth_duration: '50-70 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Full sun',
      nutritional_value: 'Low in calories and high in water content',
      imageUrl: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  
      ];
      
  const [seedlings, setSeedlings] = useState([]);


    useEffect(() => {

        const checkFarmers = async () => {
            try {
              const response = await fetch('/farmers', {
                method: 'GET',
                credentials: 'include',
              });
              const data = await response.json();
            console.log(data)
            } catch (error) {
              console.log('API error:', error);
            }
          };
          checkFarmers();

    }, [])

    const navigate = useNavigate(); 
    useEffect(() => {
      fetch('/seedlings')
        .then(response => response.json())
        .then(data => setSeedlings(data))
        .catch(error => console.error(error));
    }, []);
  
  
    return(
        <div>
        
           <FarmerList />
          
           <SeedlingList seedlings={seedlingList} />
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
    )

}

export default FarmersPage;
