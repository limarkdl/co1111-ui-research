interface Question {
    id: number;
    questionText: string;
    options: string[];
    correctAnswer: string;
}

export interface Quiz {
    id: number;
    numOfQ: number,
    title: string;
    questions: Question[];
}