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
             <div className="navbar"><Link to="/">{<img src={HomeIcon} className='w-7' alt='Home'></img>}</Link>
 
            </div> 
        </div>
    );

};

export default Header;