import './index.css';
import ProgressBar from '../ProgressBar';
import React, { useState } from 'react';
import { myQuiz } from '../../model/quizes';
const Quiz1 = () => {

    const [count, setCount] = useState<number>(0);

    const nextQ = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (count < myQuiz.numOfQ - 1) {
            setCount(count + 1);
        }
        
    };

    const prevQ = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (count >= 1) {
            setCount(count - 1);
        }
        
        console.log(myQuiz.numOfQ);
    };

    return (
        <div className="mainContentWrapper p-4"><h1 className='font-extrabold text-2xl'>{myQuiz.title}:</h1>
            <div className="quizContainer min-h-full">

                <form className="flex flex-col gap-5">
                    
                   <div>
                    <ProgressBar totalQ={12} currentQ={count}/>
                    <br></br>
                   </div>
                    <label className="font-bold text-xl w-52">{myQuiz.questions[count].questionText}</label>
                    <div className='flex flex-col gap-4 items-start'>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz.questions[count].options[0]}
                    </div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz.questions[count].options[1]}</div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz.questions[count].options[2]}</div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz.questions[count].options[3]}</div>
                    </div>
                    
                    <div className="flex flex-row-reverse items-end">
                        {/* <button className="bg-gray-400 p-3 disabled rounded-md text-sm" onClick={prevQ}>Previous</button> */}
                        <button className="bg-green-500 p-3 rounded-md text-sm" onClick={nextQ}>Next</button>
                        </div>
                </form>
                
            </div>

        </div>
    );
};

export default Quiz1;