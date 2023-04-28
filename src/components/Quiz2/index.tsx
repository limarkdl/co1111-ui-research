import React, { useState } from 'react';
import './index.css';
import ProgressBar from '../ProgressBar';
import { myQuiz2 } from '../../model/quizes';
import FinalResult from '../QuizResult';


const Quiz2 = () => {
    const [currentQuestionIndex, setCount] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState<number>(0);
    const [quizFinished, setQuizFinished] = useState<boolean>(false);
    const nextQ = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (selectedAnswer === myQuiz2.questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < myQuiz2.numOfQ - 1) {
            setCount(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true);
            sessionStorage.setItem('completedQuiz', "Not from zero");

        }

        setSelectedAnswer(null);
    };

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(parseInt(event.target.value));
    };

    return (
        <div className="mainContentWrapper p-4"><h1 className='font-extrabold text-2xl'>{myQuiz2.title}:</h1>
            <div className="quizContainer min-h-full">
                {quizFinished ? (
                    <FinalResult total={myQuiz2.numOfQ} correct={score} />
                ) : (
                    <form className="flex flex-col gap-5">
                        <div>
                            <ProgressBar totalQ={12} currentQ={currentQuestionIndex} fromZero={1}/>
                            <br></br>
                        </div>
                        <label className="font-bold text-xl w-80">{myQuiz2.questions[currentQuestionIndex].questionText}</label>
                        <div className='flex flex-col gap-4 items-start'>
                            {myQuiz2.questions[currentQuestionIndex].options.map((option, index) => (
                                <div key={index} className='anwserVariant'>
                                    <input
                                        type="radio"
                                        className="p-2 rounded-md"
                                        name={`question-${currentQuestionIndex}`}
                                        value={index + 1}
                                        checked={selectedAnswer === index + 1}
                                        onChange={handleAnswerChange}
                                    />
                                    {option}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-row-reverse items-end">
                            <button className="bg-green-500 p-3 rounded-md text-sm" onClick={nextQ}>Next</button>
                        </div>
                    </form>
                )}
                {currentQuestionIndex == myQuiz2.numOfQ && <FinalResult total={myQuiz2.numOfQ} correct={12}/>}
            </div>
            
            {quizFinished && (<div><h1 className='mt-5 font-bold text-xl'>Answers / Ответы:</h1><div className='quizContainer p-4'>
                <div className='flex flex-col gap-10'>
                {myQuiz2.questions.map((questions, index) => (<div>
                    <div className='text-xl font-bold'>{myQuiz2.questions[index].questionText}</div>
                    <br></br>
                    <p className='text-green-800 font-bold'>{myQuiz2.questions[index].options[myQuiz2.questions[index].correctAnswer -  1]}</p>
                    </div>
                ))}</div>
                
                
            </div></div>)}
        </div>
    );
};

export default Quiz2;