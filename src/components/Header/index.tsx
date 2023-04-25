import React from 'react';
import {Link} from "react-router-dom";
import './index.css';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div>
            <div className='mainText'>UI RESEARCH</div> 
                <p className='myName'>Ivan Kostin <span className='p-2 text-gray-400'>ID:21078541</span></p>
            </div>
            {/* <div className="navbar"><Link to="/">Home</Link>
            <Link to="/quiz1">Quiz1</Link>
            <Link to="/quiz2">Quiz2</Link>
            <Link to="/questionnaire">Questionnaire</Link>
            </div> */}
        </div>
    );

};

export default Header;