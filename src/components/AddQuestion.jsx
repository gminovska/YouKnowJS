import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

const AnswerField = () => (
  <div className="answerField">
      <TextField hintText="Answer" name="answers[]" />
      <Checkbox label="correct" />
  </div>
);


const AddQuestion = ({ answers, addAnswer }) => {

  return (
    <div className="addQuestionForm">
      <TextField hintText="Question text" name="text" id="text" />
      <TextField hintText="Explanation" name="explanation" id="explanation" />
      <TextField hintText="Source (link)" name="source" id="source" />

      <div className="answers">
        {answers.map(item => (<AnswerField />))}

        <RaisedButton 
          secondary label="Add another answer" 
          className="addAnswerBtn" 
          onTouchTap={addAnswer} />
        
      </div>
      <RaisedButton secondary label="Add question" className="addQuestionBtn"/>
    </div>
  );
};



AddQuestion.defaultProps = {
  
};

AddQuestion.propTypes = {
  
};

export default AddQuestion;


<div className="answerField">
          <TextField hintText="Answer" name="answers[]" />
          <Checkbox label="correct" />
        </div>