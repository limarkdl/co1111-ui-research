import React from "react";
import './index.css';


const Palette: React.FC = () => {
    return (
        <div className='paletteContainer'>
          <div className='paletteColor bg-midnightblue'>MIDNIGHT BLUE</div>
          <div className='paletteColor bg-darkBlue'>DARK BLUE</div>
          <div className='paletteColor bg-blue'>BLUE</div>
          <div className='paletteColor bg-babyBlue'>BABY BLUE</div>
        </div>
    );
};

export default Palette;