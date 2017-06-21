import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Answers = ({answers, correctAnswer, checkAnswer, type}) => {
    
            
    return (
        <form id="answers-form">
            {answers.map(answer => {
                return (
                    <div key={answer._id}>
                        <label>{answer.text}
                            <input
                                name="answers"
                                type={type === 'regular'
                                ? 'radio'
                                : 'checkbox'}
                                value={answer.correct}
                                id={answer.text}
                            />
                        </label>
                    </div>
                  )})}
                )
            })}
        </form>
    )
};


Answers.PropTypes = {
  answers: PropTypes.array.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  correctAnswer: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}


const Question = ({
    text,
    submitAnswer,
    answers,
    correctAnswer,
    checkAnswer,
    warning,
    type
}) => {
    return (
        <Paper zDepth={2}>
            <h2>{text}</h2>
            <Answers answers={answers} 
                     checkAnswer={checkAnswer} 
                     type={type} 
                     correctAnswer={correctAnswer} /> 
            {warning
                ? <p className="warning">You need to select an answer!</p>
                : null}
            <RaisedButton label="Submit answer" onTouchTap={submitAnswer}/>
        </Paper>
    );
};

Question.propTypes = {
    text: PropTypes.string.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    answers: PropTypes.array.isRequired,
    checkAnswer: PropTypes.func.isRequired,
    correctAnswer: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    warning: PropTypes.bool.isRequired
};

export default Question;
