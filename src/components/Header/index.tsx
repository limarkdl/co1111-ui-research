import React from 'react';
import {Link} from "react-router-dom";
import './index.css';

const Header: React.FC = () => {
    return (
        <div className='header'>
                <div className='mainText'>UI RESEARCH</div> 
                <p className='myName'>Ivan Kostin <span className='p-2 text-gray-400'>ID:21078541</span></p>
            {/*<Link to="/">Home</Link>
            <Link to="/quiz1">Quiz1</Link>*/}
        </div>
    );

};

export default Header;