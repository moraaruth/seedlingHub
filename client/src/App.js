import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import FarmersPage from './components/FarmersPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SeedlingList from './components/SeedlingList';




function App() {

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
    {
      id: 5,
      name: 'Pepper',
      description: 'Peppers come in a variety of shapes, sizes, and colors, and are a great source of vitamins and antioxidants.',
      price: '$2.49',
      planting_season: 'Spring',
      growth_duration: '60-80 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Full sun',
      nutritional_value: 'High in vitamin C, vitamin A, and other nutrients',
      imageUrl: 'https://media.istockphoto.com/id/1160941717/photo/small-red-jalapeno-peppers-grow-in-clay-pots-a-group-of-hot-peppers-at-the-harvest-festival.jpg?b=1&s=612x612&w=0&k=20&c=MxAyUO_Ix9gbHLBNEpMPblsA5kle1q477QpVstW7NgI='
    },
    {
      id: 6,
      name: 'Basil',
      description: 'Basil is a fragrant herb that is commonly used in Italian cuisine, but can also be used in a variety of other dishes.',
      price: '$3.49',
      planting_season: 'Spring',
      growth_duration: '60-90 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Full sun',
      nutritional_value: 'Low in calories and high in vitamin K',
      imageUrl: 'https://images.pexels.com/photos/2847908/pexels-photo-2847908.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      name: 'Carrot',
      description: 'Carrots are a root vegetable that are high in vitamin A and other nutrients.',
      price: '$1.99',
      planting_season: 'Spring',
      growth_duration: '70-80 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Full sun or partial shade',
      nutritional_value: 'High in vitamin A and fiber',
      imageUrl: 'https://images.pexels.com/photos/1192031/pexels-photo-1192031.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      name: 'Rosemary',
      description: 'Rosemary is a fragrant herb that is commonly used in Mediterranean cuisine, but can also be used in a variety of other dishes.',
      price: '$2.99',
      planting_season: 'Spring',
      growth_duration: '90-120 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Moderate watering',
      light_requirements: 'Full sun',
      nutritional_value: 'Low in nutrients',
      imageUrl: 'https://images.pexels.com/photos/6621434/pexels-photo-6621434.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 9,
      name: 'Zucchini',
      description: 'Zucchini is a versatile and nutritious vegetable that can be used in a variety of dishes, from savory to sweet.',
      price: '$1.79',
      planting_season: 'Spring',
      growth_duration: '50-60 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Full sun',
      nutritional_value: 'Low in calories and high in vitamin C',
      imageUrl: 'https://images.pexels.com/photos/5644993/pexels-photo-5644993.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    
   
  
    {
      id: 10,
      name: 'Mint',
      description: 'Mint is a refreshing herb that is commonly used in tea and other beverages, as well as in many dishes.',
      price: '$2.49',
      planting_season: 'Spring',
      growth_duration: '90-100 days',
      harvest_time: 'Summer',
      soil_type: 'Well-draining soil',
      water_requirements: 'Regular watering',
      light_requirements: 'Partial shade',
      nutritional_value: 'Low in calories and high in vitamin C',
      imageUrl: 'https://images.pexels.com/photos/4594080/pexels-photo-4594080.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
      ];
      
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [farmer, setFarmer] = useState({});


  useEffect(() => {
    const loginStatus = async () => {
      try {
        const response = await fetch('/logged_in', { 
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        if (data.logged_in) {
          handleLogin(data);
        } else {
          handleLogout();
        }
      } catch (error) {
        console.log('api errors:', error);
      }
    };
    loginStatus();
  }, [isLoggedIn]);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setFarmer(data.farmer);
    alert('Logged In successfully')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFarmer({});
  };



  return (
 
    <div>
    
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route exact path='/signup' element={<Signup handleLogin={handleLogin} />} />
          <Route exact path="/farmer" element={<FarmersPage farmer ={farmer} />} />
          <Route path="/farmer/:id/seedlings" element={<SeedlingList seedlings={seedlingList} />} /> 


        </Routes>    
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;