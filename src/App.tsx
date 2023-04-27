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
  

  return (
    <div className='wrapper'>
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

