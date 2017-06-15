import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const Question = ({ text, submitAnswer }) => {

  return (
    <div>
      <Paper zDepth={2}>
        {text}
      </Paper>
      <RaisedButton label="Submit answer" onTouchTap={submitAnswer} />
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Question;
