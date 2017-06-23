import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

const AnswerField = () => (
  <div className="answerField">
      <TextField hintText="Answer" className='answerText' />
      <Checkbox label="correct" className='answerCheck'/>
  </div>
);


const AddQuestion = ({ answers, addAnswer, newQuestion }) => {

  return (
    <div className="addQuestionForm">
      <TextField hintText="Question text" name="text" id="text" />
      <TextField hintText="Explanation" name="explanation" id="explanation" />
      <TextField hintText="Source (link)" name="source" id="source" />

      <div className="answers">
        {answers.map(item => (<AnswerField key={item}/>))}

        <RaisedButton 
          secondary label="Add another answer" 
          className="addAnswerBtn" 
          onTouchTap={addAnswer} />
        
      </div>
      <RaisedButton secondary label="Add question" className="addQuestionBtn" onTouchTap={newQuestion}/>
    </div>
  );
};



AddQuestion.defaultProps = {
  
};

AddQuestion.propTypes = {
  
};

export default AddQuestion;
