// QuizFunctions.ts
import { Quiz, Question } from './index';

export const findQuestionById = (quiz: Quiz, questionId: number): Question | undefined => {
    return quiz.questions.find(question => question.id === questionId);
}

export const displayQuestion = (question: Question | undefined): void => {
    if (question) {
        console.log(`Question ID: ${question.id}`);
        console.log(`Question: ${question.questionText}`);
        console.log(`Options: ${question.options.join(', ')}`);
    } else {
        console.log('Question not found');
    }
}