import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

const Answers = ({answers, type}) => {        
    return (
        <form id="answers-form">
            {answers.map(answer => {
                return (
                    <div key={answer._id} className="answerField">
                        <label>
                            <input
                                className="answerBox"
                                name="answers"
                                type={type === 'regular'
                                ? 'radio'
                                : 'checkbox'}
                                value={answer._id}
                            />
                            {answer.text}
                        </label>
                    </div>
                  )})}
        </form>
    )
};


Answers.PropTypes = {
  answers: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}


const Question = ({
    text,
    submitAnswer,
    answers,
    verifyAnswer,
    warning,
    type,
    progress,
    maxProgress
}) => {
    return (
      <div className="question">
        <Paper zDepth={2} className="questionCard">
            <LinearProgress max={maxProgress}
                        value={progress}
                        mode="determinate"  />
            <h2>{text}</h2>
            <Answers answers={answers} 
                     type={type}  /> 
            {warning
                ? <p className="warning">You need to select an answer!</p>
                : null}
            <RaisedButton label="Submit answer" onTouchTap={() => {
              verifyAnswer().then(submitAnswer)
              }} />
        </Paper>
      </div>
    );
};

Question.propTypes = {
    text: PropTypes.string.isRequired,
    submitAnswer: PropTypes.func.isRequired,
    answers: PropTypes.array.isRequired,
    verifyAnswer: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    warning: PropTypes.bool.isRequired
};

export default Question;
