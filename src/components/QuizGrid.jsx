import React from 'react';
import { Link } from 'react-router-dom';


const QuizGrid = ({ quizzes}) => {

    const displayInfo = (e) => {
      e.currentTarget.classList.toggle('displayInfo');
      console.log(e.currentTarget.classList);
    }

    return (
        <div className="quizGrid">

            {quizzes.map((quiz) => (
              <div key={quiz._id}
                   className="quizItem"
                   onTouchTap={(e) => { displayInfo(e) }} >  

                <h1 >{quiz.name}</h1>
                <Link to={{ pathname: `/quizzes/${quiz._id}`}}>
                  Link
                </Link>

            </div>
        ))}


        </div>
    );
};

export default QuizGrid;
