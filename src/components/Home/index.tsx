import './index.css';
import Introduction from "../Introduction";
import React, {useState} from "react";
import {Link} from "react-router-dom";
const Home: React.FC = () => {
    const random = Math.floor(Math.random() * 2);
    const quizRoute = random < 0.5 ? '/quiz1' : '/quiz2';

    return (
        <div>
            <Introduction />
            <div className='px-4 text-center mt-5'>
                <Link to={quizRoute}>
                    <button className='bt_startQuiz'>BEGIN / НАЧАТЬ</button>
                </Link>
                <br />
                <br />
                {/*{sessionStorage.getItem('completedQuiz') !== null && (*/}
                {/*    <Link to='/questionnaire'>*/}
                {/*        <button className='bt_startQuiz Questionnaire'>*/}
                {/*            START QUESTIONNAIRE*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default Home;