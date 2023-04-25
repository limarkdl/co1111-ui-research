import './index.css';
import Introduction from "../Introduction";
import React from "react";
import {Link} from "react-router-dom";
const Home: React.FC = () => {
    return (
        <div>
            <Introduction/>
            <div className='px-4'>
            <Link to="/quiz1"><button className="bt_startQuiz">START QUIZ №1</button></Link>
            <br/>
            <br/>
            <Link to="/quiz2"><button className="bt_startQuiz">START QUIZ №2</button></Link>
            <br/><br/>
            <Link to="/quiz2"><button className="bt_startQuiz Questionnaire">START QUESTIONNAIRE</button></Link>
            </div>
            
        </div>
    );
};

export default Home;