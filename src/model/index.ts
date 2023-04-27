interface Question {
    id: number;
    questionText: string;
    options: string[];
    correctAnswer: number;
}

export interface Quiz {
    id: number;
    numOfQ: number,
    title: string;
    questions: Question[];
}