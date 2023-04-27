import './index.css';
import Introduction from "../Introduction";
import React, {useState} from "react";
import {Link} from "react-router-dom";
const Home: React.FC = () => {
    // Генерируем случайное число от 0 до 1 при инициализации компонента
  const [randomValue] = useState(Math.random());

  // Определяем, какой маршрут использовать на основе случайного числа
  const quizRoute = randomValue < 0.5 ? '/quiz1' : '/quiz2';
    return (
        <div>
            <Introduction/>
            <div className='px-4'>
                {Math.random() % 1 && (
                    <Link to={quizRoute}><button className="bt_startQuiz">START QUIZ</button></Link>
                )}
            <br/><br/>
            <Link to="/questionnaire"><button className="bt_startQuiz Questionnaire">START QUESTIONNAIRE</button></Link>
            </div>
            
        </div>
    ); 
};

export default Home;