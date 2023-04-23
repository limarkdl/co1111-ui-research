import React from "react";
import './index.css';

const Introduction: React.FC = () => {
    return (
        <div className="introContainer">
            <div className="container"><span className="text-red-500 font-bold">EN: </span>This is a small research project that offers to take 2 small quizzes, 
            get results and at the end answer a couple of questions about the interface. 
            Thanks in advance for your participation! </div>
            <div className="container"><span className="text-red-500 font-bold">RU: </span>Это небольшой исследовательский проект, предлагающий пройти 2 небольших викторины, 
            получить результаты и в конце ответить на пару вопросов об интерфейсе. 
            Заранее спасибо за участие! </div>
        </div>
    );
};

export default Introduction;