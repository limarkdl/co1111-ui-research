import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz1 from "./components/Quiz1";
import Home from "./components/Home";
import {displayQuestion,findQuestionById} from "./model/indexFunctions";
import {Quiz, Question} from "./model/";


const App: React.FC = () => {
  return (
    <div className='wrapper'>
        <BrowserRouter>
            <Header />
            <div className='mainContentWrapper'>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/quiz1" element={<Quiz1/>} />

            </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;

