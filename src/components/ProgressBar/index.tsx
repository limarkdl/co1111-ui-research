import './index.css';

interface ProgressInfo {
    totalQ: number,
    currentQ: number,
    leftQ?: number,
    fromZero?: number
};


const ProgressBar: React.FC<ProgressInfo> = ({totalQ, currentQ, fromZero = 1}) => {
    return ( 
    <div>
        <p className="progressPercent">{Math.round(((currentQ + fromZero)/ totalQ) * 100)}%</p>
        <div className="background">
        <div style={{width: `${Math.round(((currentQ + fromZero)/ totalQ) * 100)}%`}} className="progressLine">
        </div>
        </div>
    </div>
            
    );
};

export default ProgressBar;