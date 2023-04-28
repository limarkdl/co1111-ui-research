import React, { useState } from 'react';
import './index.css';

const Questionnaire: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);

    const completedQuiz = sessionStorage.getItem('completedQuiz');
    const score:any = sessionStorage.getItem('score');
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsEnabled(false);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const response = await fetch('https://script.google.com/macros/s/AKfycbxAhbAUOWnS2zlOW642j29h5d6ZdMBEL2AefrC2SjfIqentOIPJE-8v1ZCaTEEJ2mQ/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        setSubmitted(true);
    };

    return (
        <div>
            {completedQuiz === null ? (
                <h1 className='text-center text-2xl pt-10 text-red-500 font-extrabold'>
                    No Quiz Completed
                </h1>
            ) : (
                <div className='mainContentWrapper p-4'>
                    <h1 className='font-extrabold text-2xl'>Questionnaire:</h1>
                    <div className='questionnaireWrapper'>
                        {submitted ? (
                            <div className='text-center flex flex-col gap-5 mb-10'>
                                <h2 className='text-2xl  font-extrabold pt-12'>Thank you for participation! / Спасибо за участие!</h2>
                                <p className='text-4xl '>🦆🦆🦆</p>
                                <p className='text-4xl '>🥇🥇🥇</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="feedbackFormInput">
                                    <label htmlFor='age'>How old are you? / Сколько Вам лет? </label>
                                    <select id='age' name='age' className='p-1'>
                                        <option value='<18'>Less 18</option>
                                        <option value='18-24'>18-24</option>
                                        <option value='25-34'>25-34</option>
                                        <option value='35-44'>35-44</option>
                                        <option value='45-54'>45-54</option>
                                        <option value='55-64'>55-64</option>
                                        <option value='65+'>65+</option>
                                    </select>
                                </div>

                                <div className="feedbackFormInput">
                                    <label htmlFor='howInteresting'>
                                        How interesting and exciting was the quiz? / Насколько интересной и захватывающей была викторина?*
                                    </label>
                                    <input
                                        type='range'
                                        id='howInteresting'
                                        name='howInteresting'
                                        min='1'
                                        max='5'
                                        step='1'
                                        className='h-12'
                                        defaultValue='3'
                                        required={true}
                                    /><div className='flex flex-row justify-between text-sm'><p>1</p><p>5</p></div>
                                </div>

                                <div className="feedbackFormInput">
                                    <label htmlFor='howConfidence'>
                                        How sure were you in your answers? / Насколько Вы были уверены в ответах? *
                                    </label>
                                    <input
                                        type='range'
                                        id='howConfidence'
                                        name='howConfidence'
                                        min='1'
                                        max='5'
                                        step='1'
                                        className='h-12'
                                        defaultValue='3'
                                        required={true}
                                    /><div className='flex flex-row justify-between text-sm'><p>1</p><p>5</p></div>
                                </div>

                                <div className="feedbackFormInput">
                                    <label htmlFor='howBored'>How bored were you during the quiz? / Насколько Вам было скучно во время викторины? *</label>
                                    <input
                                        type='range'
                                        id='howBored'
                                        name='howBored'
                                        min='1'
                                        max='5'
                                        step='1'
                                        className='h-12'
                                        defaultValue='3'
                                        required={true}
                                    /><div className='flex flex-row justify-between text-sm'><p>1</p><p>5</p></div>
                                </div>
                                <div className="feedbackFormInput">
                                    <label htmlFor='howDepressed'>How depressing was the quiz? / Насколько удручающей была викторина? *</label>
                                    <input
                                        type='range'
                                        id='howDepressed'
                                        name='howDepressed'
                                        min='1'
                                        max='5'
                                        step='1'
                                        className='h-12'
                                        defaultValue='3'
                                        required={true}
                                    /><div className='flex flex-row justify-between text-sm'><p>1</p><p>5</p></div>
                                </div>
                                <div className='feedbackFormInput'>
                                    <label htmlFor='howConvenient'>
                                        How convenient did the quiz progress bar seem to you? / Насколько удобным Вам показался индикатор выполнения викторины? *
                                    </label>
                                    <input
                                        type='range'
                                        id='howConvenient'
                                        name='howConvenient'
                                        min='1'
                                        max='5'
                                        step='1'
                                        className='h-12'
                                        defaultValue='3'
                                        required={true}
                                    /><div className='flex flex-row justify-between text-sm'><p>1</p><p>5</p></div>
                                </div>
                                <div className='feedbackFormInput'>
                                    <label htmlFor='openFeedback'>A few words about the quiz? / Пару слов о викторине?</label>
                                    <input type='textarea' className='p-1' id='openFeedback' placeholder='Not required / Не обязательно' name='openFeedback'/>
                                </div>
                                <input type='hidden' name='completedQuiz' value={completedQuiz} />
                                <input type='hidden' name='score' value={score} />

                                <button type='submit' className='bg-green-600 p-3 mt-4 rounded-md disabled:bg-gray-400' disabled={!isEnabled}>Submit / Завершить</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Questionnaire;