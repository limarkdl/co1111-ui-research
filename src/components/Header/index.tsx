import React from 'react';
import {Link} from "react-router-dom";
import HomeIcon from '../../assets/Home.svg'
import './index.css';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div>
            <div className='mainText'>UI RESEARCH</div> 
                <p className='myName'>Ivan Kostin <span className='p-2 text-gray-400'>ID:21078541</span></p>
            </div>
             <div className="navbar"><Link to="/">{<img src={HomeIcon} className='w-5'></img>}</Link>
            <Link to="/quiz1">Q1</Link>
            <Link to="/quiz2">Q2</Link> 
            <Link to="/questionnaire">QF</Link>
            </div> 
        </div>
    );

};

export default Header;