import React from "react";
import './index.css';

const Introduction: React.FC = () => {
    return (
        <div className="introContainer">
            <div className='container'>
                <h1 className='text-center text-2xl font-bold'>Hello! / Привет!</h1>
            </div>
            <div className="container font-bold">
                What is it? / Что это?
            </div>
            <div className="container"><span className="text-red-500 font-bold">EN: </span>This is my little research project discussing prevalence quiz,
                get the results and at the end answer a couple of questions about the interface. This will take about 3-4 minutes.
                Thanks in advance for your participation!</div>
            <div className="container"><span className="text-red-500 font-bold">RU: </span>Это мой маленький исследовательский проект, предлагающий пройти небольшую викторину,
            получить результаты и в конце ответить на пару вопросов об интерфейсе. Это займет примерно 3-4 минуты.
            Заранее спасибо за участие! </div>
            <div className="container font-bold mt-5">
                How my data is being collected? / Как собираются мои данные?
            </div>

            <div className="container"><span className="text-red-500 font-bold">EN: </span>
                The data is stored on Google servers, without access by third parties.
                The collected data does not contain any personal information that can identify you.</div>
            <div className="container"><span className="text-red-500 font-bold">RU: </span>
                Данные хранятся на серверах Google, без доступа для третьих лиц.
                Собираемые данные не содержат никакой личной информации, позволяющей идентифицировать Вас.</div>
        </div>
    );
};

export default Introduction;