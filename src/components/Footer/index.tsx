import viteLogo from '../../assets/Vite.svg';
import reactLogo from '../../assets/React.png';
import typescriptLogo from '../../assets/TypeScript.png';
import tailwindcsslogo from '../../assets/TailWindCSS.png';
import Palette from '../Palette';
import './index.css';
const Footer = () => {
    return (
        <div> 
            {/*<Palette/>*/}
        <footer className="footer">
           
           <p className="footer-text">Powered by:</p>
           <img className="footer-logo" src={viteLogo} alt="Vite logo" />
           <img className="footer-logo" src={reactLogo} alt="React logo" />
           <img className="footer-logo" src={typescriptLogo} alt="TypeScript logo" />
           <img className="footer-logo" src={tailwindcsslogo} alt="TailWindCSS logo" />
       </footer></div>
        
    );
};

export default Footer;