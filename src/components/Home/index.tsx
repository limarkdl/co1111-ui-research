import './index.css';
import Introduction from "../Introduction";
import React from "react";
import {Link} from "react-router-dom";
const Home: React.FC = () => {
    return (
        <div>
            <Introduction/>
            <Link to="/quiz1"><button className="bt_startQuiz1">START QUIZ №1</button></Link>
            <br/>
            <br/>
            <Link to="/quiz2"><button className="bt_startQuiz1">START QUIZ №2</button></Link>
        </div>
    );
};

export default Home;