import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { grey300, darkBlack } from 'material-ui/styles/colors';


const QuizGrid = ({ quizzes}) => {

    const displayInfo = (e) => {
      e.currentTarget.classList.toggle('reversed');
    }

    return (
        <div className="quizGrid">

            {quizzes.map((quiz) => (
              <div key={quiz._id}
                   className="quizItem"
                   onTouchTap={(e) => { displayInfo(e) }} >  
              
              <Paper 
                className="flipper" 
                zDepth={2} >
               <div className="front" 
                    style={{ backgroundImage: `url(${quiz.imageURL})` }} >
               </div>
               <div className="back" style ={{ backgroundColor: grey300 }}>
                <h1>
                  {quiz.name}
                </h1>
                <p>
                  {quiz.description}
                </p>
                <p>
                  Number of questions: {quiz.numberOfQuestions}
                </p>
                <Link to={{ pathname: `/quizzes/${quiz._id}`}}>
                  <RaisedButton 
                    primary 
                    label="Take a quiz!"
                    labelStyle={{ color: darkBlack }} />
                </Link>
               </div>


              </Paper>
            </div>
        ))}


        </div>
    );
};

export default QuizGrid;



//  <h1 >{quiz.name}</h1>
//       <Link to={{ pathname: `/quizzes/${quiz._id}`}}>
//          Link
//        </Link>