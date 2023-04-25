import './index.css';

interface ProgressInfo {
    totalQ: number,
    currentQ: number,
    leftQ?: number,
};


const ProgressBar: React.FC<ProgressInfo> = ({totalQ, currentQ}) => {
    return ( 
    <div>
        <p className="progressPercent">{Math.round(((currentQ + 1)/ totalQ) * 100)}%</p>
        <div className="background">
        <div style={{width: `${Math.round(((currentQ + 1 )/ totalQ) * 100)}%`}} className="progressLine">
        </div>
        </div>
    </div>
            
    );
};

export default ProgressBar;