import { useState } from 'react';
import './index.css';
import ProgressBar from '../ProgressBar';
import { myQuiz2 } from '../../model/quizes';
import { Link } from 'react-router-dom';

const Quiz2 = () => {
    const [count, setCount] = useState<number>(0);
    const [text,setText] = useState<string>('Next');

    let pathWay: string = '';

    const nextQ = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (count < myQuiz2.numOfQ - 1) {
            setCount(count + 1);
        }
        if (count == (myQuiz2.numOfQ - 2)) {
            // setText('Finish');
        }
        
    };

    const bt_Next: React.CSSProperties = {
        display: "hidden !important",
    }
    const bt_Finish: React.CSSProperties = {
        display: "hidden",
    }

    return (
        <div className="mainContentWrapper p-4"><h1 className='font-extrabold text-2xl'>{myQuiz2.title}:</h1>
            <div className="quizContainer min-h-full">

                <form className="flex flex-col gap-5">
                    
                   <div>
                    <ProgressBar totalQ={12} currentQ={count}/>
                    <br></br>
                   </div>
                    <label className="font-bold text-xl w-52">{myQuiz2.questions[count].questionText}</label>
                    <div className='flex flex-col gap-4 items-start'>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz2.questions[count].options[0]}
                    </div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz2.questions[count].options[1]}</div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz2.questions[count].options[2]}</div>
                    <div className='anwserVariant'><input type="radio" className="p-2 rounded-md"/>{myQuiz2.questions[count].options[3]}</div>
                    </div>
                    
                    <div className="flex flex-row-reverse items-end">
                        {/* <button className="bg-gray-400 p-3 disabled rounded-md text-sm" onClick={prevQ}>Previous</button> */}
                        <button className="bg-green-500 p-3 rounded-md text-sm" style={bt_Next} onClick={nextQ}>Next</button>
                        <button className="bg-blue p-3 rounded-md text-sm hidden" style={bt_Finish}><Link to={pathWay}>Finish</Link></button>
                        </div>
                </form>
                
            </div>

        </div>
    );
};

export default Quiz2;