export interface Quiz {
    id: number,
    questions: Questions[],
};

interface Questions {
    id: number,
    title: string,
    correctAnswer: string,
    answers: Answer[] 
}

interface Answer {
    name: string,
    content: string
}