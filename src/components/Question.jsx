import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Question = ({ text, submitAnswer, answers, checkAnswer, warning }) => {
  let i = 0;
  return (
    <div>
      <Paper zDepth={2}>
        {text}
        <form id="answers-form">
        {answers.map(answer => {
          return (
            <div key={i++}>
              <input name="answers" 
                     type="radio" 
                     value={answer.correct}
                     id={answer.text}
                     onClick={ (e) => 
                      e.target.value === "true"
                        ? checkAnswer(true)
                        : checkAnswer(false) }/>
              <label htmlFor={answer.text}>{answer.text}</label>
            </div>
          )
        })}
        </form>
        { warning 
          ? <p className="warning">You need to select an answer!</p>
          : null }
      </Paper>
      <RaisedButton label="Submit answer" onTouchTap={submitAnswer} />
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
  submitAnswer: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
  checkAnswer: PropTypes.func.isRequired
};

export default Question;
