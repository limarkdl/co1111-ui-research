import {Link} from 'react-router-dom';

interface FinalResult {
    total: number;
    correct: number;
}

const storeScore = (score: number) => {
    sessionStorage.setItem('score', score.toString());
};

const QuizResult: React.FC<FinalResult> = ({total, correct}) => {
    const score = Math.floor((correct / total) * 100);
    storeScore(score);
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold pb-4'>🏆</h1>
            <h2 className='text-center text-4xl'>{score}/100</h2>
            <br />
            <Link to='/questionnaire' className='bg-blue p-3 rounded-md text-sm'>
                Continue / Далее
            </Link>
        </div>
    );
};

export default QuizResult;
