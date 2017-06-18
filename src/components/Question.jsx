import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Question = ({ text, submitAnswer, answers, checkAnswer }) => {
  let i = 0;
  return (
    <div>
      <Paper zDepth={2}>
        {text}
        {answers.map(answer => {
          return (
            <div key={i++}>
              <input name="answers" type="radio" value={answer.correct}
                    onClick={ (e) => 
                      e.target.value === "true"
                        ? checkAnswer(true)
                        : checkAnswer(false) }/>
              <span>{answer.text}</span>
            </div>
          )
        })}
      </Paper>
      <RaisedButton label="Submit answer" onTouchTap={submitAnswer} />
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Question;
