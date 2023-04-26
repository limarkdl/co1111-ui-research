import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz1 from "./components/Quiz1";
import Quiz2 from "./components/Quiz2"
import Home from "./components/Home";
import Questionnaire from './components/Questionnaire';




  
const App: React.FC = () => {
  const [country, setCountry] = useState<string>('Hello');
  // fetch('https://api.ipify.org?format=json')
  // .then(response => response.json())
  // .then(data => {
  //   const ipAddress = data.ip;
  //   console.log('User IP Address:', ipAddress);
  //   fetch('https://geo.ipify.org/api/v2/country?apiKey=at_1ENkQvr6xXRNyuJJX4EXNLef6L1Vf&ipAddress=' + ipAddress)
  // .then(response => response.json())
  // .then(data => {
  //   const ipAddressLocation = data.location;
  //   console.log('Location: ', ipAddressLocation);
  //   setCountry(country + ipAddressLocation);
  // })
  // .catch(error => {
  //   console.error('Error fetching IP:', error);
  // });
  // })
  // .catch(error => {
  //   console.error('Error fetching IP:', error);
  // });

  return (
    <div className='wrapper'>
      <p>{country}</p>
        <BrowserRouter>
            <Header />
            
            <div className='mainContentWrapper'>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/quiz1" element={<Quiz1/>} />
                <Route path="/quiz2" element={<Quiz2/>} />
                <Route path="/questionnaire" element={<Questionnaire/>} />
            </Routes>
            
            </div>
            
            <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;

