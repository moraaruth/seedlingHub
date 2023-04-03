import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FarmerList from './components/FarmerList';
import ConsumerList from './components/ConsumerList';
import SeedlingList from './components/SeedlingList';
// import ConsumerList from './components/ConsumerList';
// import SeedlingList from './components/SeedlingList';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Logout from './components/Logout';

function App() {
  const [farmers, setFarmers] = useState([]);
  const [consumers, setConsumers] = useState([]);
  const [seedlings, setSeedlings] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [farmersRes, consumersRes, seedlingsRes] = await Promise.all([
          fetch('/farmers'),
          fetch('/consumers'),
          fetch('/seedlings')
        ]);
        const farmersData = await farmersRes.json();
        const consumersData = await consumersRes.json();
        const seedlingsData = await seedlingsRes.json();
        setFarmers(farmersData);
        setConsumers(consumersData);
        setSeedlings(seedlingsData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // const handleLogin = (user) => {
  //   setIsLoggedIn(true);
  //   setCurrentUser(user);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setCurrentUser(null);
  // };

  return (
    <div>
      <Navbar />
      <FarmerList />
      <ConsumerList />
      <SeedlingList />
    </div>
    // <Router>
    //   <Navbar isLoggedIn={isLoggedIn} />
    //   <Routes>
    //     {isLoggedIn && currentUser?.role === 'admin' ? (
    //       <Route exact path="/">
    //         <FarmerList farmers={farmers} />
    //       </Route>
    //     ) : (
    //       <Route exact path="/">
    //         <Login handleLogin={handleLogin} />
    //       </Route>
    //     )}
    //     {isLoggedIn ? (
    //       <Route exact path="/logout">
    //         <Logout handleLogout={handleLogout} />
    //       </Route>
    //     ) : null}
    //     {isLoggedIn ? (
    //       <Route exact path="/consumers">
    //         <ConsumerList consumers={consumers} />
    //       </Route>
    //     ) : null}
    //     {isLoggedIn ? (
    //       <Route exact path="/seedlings">
    //         <SeedlingList seedlings={seedlings} />
    //       </Route>
    //     ) : null}
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;
