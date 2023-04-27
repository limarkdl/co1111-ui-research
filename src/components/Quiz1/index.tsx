import React, { useState } from 'react';
import './index.css';
import ProgressBar from '../ProgressBar';
import { myQuiz1 } from '../../model/quizes';
import { Link } from 'react-router-dom';

const Quiz2 = () => {
    const [currentQuestionIndex, setCount] = useState<number>(0);
    const nextQ = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCount(currentQuestionIndex + 1);
    };


    return (
        <div className="mainContentWrapper p-4"><h1 className='font-extrabold text-2xl'>{myQuiz1.title}:</h1>
            <div className="quizContainer min-h-full">
                <form className="flex flex-col gap-5">
                   <div>
                    <ProgressBar totalQ={12} currentQ={currentQuestionIndex} fromZero={0}/>
                    <br></br>
                   </div>
                    <label className="font-bold text-xl w-52">{myQuiz1.questions[currentQuestionIndex].questionText}</label>
                    <div className='flex flex-col gap-4 items-start'>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz1.questions[currentQuestionIndex].options[0]}
                    </div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz1.questions[currentQuestionIndex].options[1]}</div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz1.questions[currentQuestionIndex].options[2]}</div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz1.questions[currentQuestionIndex].options[3]}</div>
                    </div>
                    
                    <div className="flex flex-row-reverse items-end">
                        {/* <button className="bg-gray-400 p-3 disabled rounded-md text-sm" onClick={prevQ}>Previous</button> */}
                        {currentQuestionIndex < myQuiz1.numOfQ - 1 && (
                        <button className="bg-green-500 p-3 rounded-md text-sm" onClick={nextQ}>Next</button>)}
                        {currentQuestionIndex === myQuiz1.numOfQ - 1 && (
                                <Link className="bg-blue p-3 rounded-md text-sm" to="/">Finish</Link>
                        )}
                        </div>
                </form>
                
            </div>

        </div>
    );
};

export default Quiz2;