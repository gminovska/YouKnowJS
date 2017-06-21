import React from 'react';
import { Link } from 'react-router-dom';

const QuizGrid = ({quizzes}) => {

    return (
        <div>
            {quizzes.map((quiz) => (
            <div key={quiz._id}>  
              <h1 >{quiz.name}</h1>
              <Link to={{
                pathname: `/quizzes/${quiz._id}`,
              }}>Link</Link>
            </div>
        ))}
        </div>
    );
};

export default QuizGrid;