import React from 'react';

const QuizGrid = ({quizzes}) => {

    const displayQuiz = (quizzes) => (
        quizzes.map((quiz) =>{
            <h1>{quiz.name}</h1>
        })
    )

    return (
        <div>
            {quizzes.map((quiz) => (
            <h1 key={quiz.id}>{quiz.name}</h1>
        ))}
        </div>
    );
};

export default QuizGrid;