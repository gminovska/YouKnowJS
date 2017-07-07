import React from 'react';
import axios from 'axios';
import AddQuestion from './AddQuestion';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      questions: [],
      confirmationOpen: false
    }

  }

  closeConfirmation = () => {
    console.log("You have just closed a snackbar");
    this.setState(() => ({ confirmationOpen: false }))
  }

  resetQuizForm = () => {
    document.querySelector('.quiz-form').reset();
    this.setState(
      () => ({ questions: [] })
    );
  }

  resetQuestionForm = () => {
    this.setState(
      (prevState) => ({ answers: [] })
    );
    document.getElementById('text').value = null;
    document.getElementById('explanation').value = null;
    document.getElementById('source').value = null;
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
    newQuestion.questionType = newQuestion.correctAnswer.length === 1 
                                  ? 'regular' 
                                  : 'multi-choice'

    this.resetQuestionForm();
    this.setState(
      (prevState) => ({ questions: prevState.questions.concat([newQuestion]) })
    );
  };

  addQuiz = () => {
    const newQuiz = {};
    newQuiz.name = document.getElementById('name').value;
    newQuiz.description = document.getElementById('description').value;
    newQuiz.imageURL = document.getElementById('imageURL').value;
    newQuiz.resource = document.getElementById('resource').value;
    newQuiz.questions = this.state.questions;
    newQuiz.numberOfQuestions = this.state.questions.length;

    this.resetQuizForm();
    return newQuiz;
  }

  saveQuiz = () => {
    axios.post('/api/quizzes/new', this.addQuiz())
      .then(
        (response) => {
          console.log(response);
          this.setState(() => ({ confirmationOpen: true }))
        })
      .catch(() => {console.log('Quiz not really saved anywhere')})
  }



  render() {
    return (
      <div>

        <form className="quiz-form">
          <TextField floatingLabelText="Quiz name" name="name" id="name"/>
          <TextField floatingLabelText="Description" name="description" id="description"/>
          <TextField floatingLabelText="Image URL" name="imageURL" id="imageURL"/>
          <TextField floatingLabelText="Resource" name="resource" id="resource"/>
          <AddQuestion
            answers={this.state.answers}
            addAnswer={this.addAnswer}
            newQuestion={this.addQuestion}/>
          
          <RaisedButton label="Add quiz" secondary onTouchTap={this.saveQuiz} />
        </form>

        /**
         * TODO Fix a bug with snackbar popping out after clicking
         * "Add another answer" button, once you have already submitted a quiz
         */
        <Snackbar
          open={this.state.confirmationOpen}
          message="Quiz added"
          autoHideDuration={5000}
          onRequestClose={this.handleRequestClose}
          style = {{ textAlign: "center" }}
        />

      </div>
    );
  }
}

export default Admin;
