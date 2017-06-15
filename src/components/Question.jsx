import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Question = ({ text, submitHandler, last, handleLast }) => {

  return (
    <div>
      <Paper zDepth={2}>
        {text}
      </Paper>
      {last 
        ? <RaisedButton label="See results" onTouchTap={handleLast} />
        : <RaisedButton label="Next" onTouchTap={submitHandler} />}
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default Question;
