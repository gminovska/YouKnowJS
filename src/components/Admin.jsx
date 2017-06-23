import React from 'react';
import AddQuestion from './AddQuestion';
import TextField from 'material-ui/TextField';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      questions: []
    }

  }

  addAnswer = () => {
    this.setState((prevState) => ({
      answers: prevState
        .answers
        .concat([prevState.answers.length])
    }));
  }

  grabCorrectAnswers = () => {
    const correct = [];
    Array
      .from(document.querySelectorAll('.answerCheck input[type="checkbox"]'))
      .forEach((item, index) => {
        console.log(item);
        if (item.checked) {
          correct.push(index)
        }
      });
    return correct;
  };
  
  addQuestion = () => {
    const newQuestion = {};
    newQuestion.text = document
      .getElementById('text')
      .value;
    newQuestion.explanation = document
      .getElementById('explanation')
      .value;
    newQuestion.source = document
      .getElementById('source')
      .value;
    newQuestion.answers = Array
      .from(document.querySelectorAll('.answerText'))
      .map((item, index) => ({
        text: item
          .querySelector('input')
          .value,
        _id: index
      }));
    newQuestion.correctAnswer = this.grabCorrectAnswers();

    console.log(newQuestion);

  };

  render() {
    return (
      <div>

        <div className="quiz-form">
          <TextField hintText="Quiz name" name="name" id="name"/>
          <TextField hintText="Quiz description" name="description" id="description"/>
          <TextField hintText="img url" name="imageURL" id="imageURL"/>
          <TextField hintText="Resource title" name="resource" id="resource"/>
          <AddQuestion
            answers={this.state.answers}
            addAnswer={this.addAnswer}
            newQuestion={this.addQuestion}/>

        </div>

      </div>
    );
  }
}

export default Admin;
