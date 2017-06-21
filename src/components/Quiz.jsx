import React from 'react';
import { matchPath } from 'react-router'

import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Question from './Question';
import Result from './Result';


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      score: 0,
      quizQuestions: undefined,
      quizIndex: 0,
      quizQuestionsNumber: undefined,
      lastQuestion: false,
      displayResult: false,
      dialogOpen: false,
      currentAnswer: null,
      noAnswerWarning: false
    }
  }

  componentDidMount() {
    const url = `/api/quizzes/${this.props.match.params.id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          quizQuestions: data.questions,
          quizQuestionsNumber: data.questions.length
        });
      });
  }

  incrementScore = () => {
    this.setState(
      prevState => ({ score: ++prevState.score })
    )
  }

  incrementIndex = () => {
    if (this.state.quizIndex < this.state.quizQuestionsNumber) {
        this.setState((prevState) => ({
        quizIndex: ++prevState.quizIndex
      }));
    }
  }

  nextQuestion = () => {
    if(this.state.quizIndex === this.state.quizQuestionsNumber - 2) {
      this.setState(
        () => ({ lastQuestion: true })
      )
    }
    this.incrementIndex();
  }

  displayScore = () => {
    this.setState(
      () => ({ displayResult: true })
    )
  }

  openDialog = () => {
    if(this.state.currentAnswer !== null) {
      document.getElementById('answers-form').reset();
      if(this.state.currentAnswer) this.incrementScore();
      this.setState(
        () => ({ dialogOpen: true,
                 noAnswerWarning: false 
                })
      );
    }
    else {
      this.setState(
        () => ({ noAnswerWarning: true })
      )
    }
  }

  closeDialog = () => {
    this.setState(
      () => ({ dialogOpen: false, currentAnswer: null })
    );
  }

  isAnswerCorrect = (bool) => {
    this.setState(
      () => ({ currentAnswer: bool })
    )}

  render() {

    const actions = [
      <FlatButton
        label="Next"
        primary
        onTouchTap={() => {
          this.closeDialog();
          this.nextQuestion();
        }}
      />,
      <FlatButton
        label="See Results"
        primary
        onTouchTap={() => {
          this.closeDialog();
          this.displayScore();
        }}
      />
    ];

    if(this.state.displayResult) {
      return (
        <Result score={this.state.score}
                total={this.state.quizQuestionsNumber} />
      )
    }
    else {
      return (
      <div>
        {this.state.quizQuestions 

          ? <Question 
              text={this.state.quizQuestions[this.state.quizIndex].text} submitAnswer={this.openDialog}
              answers ={this.state.quizQuestions[this.state.quizIndex].answers}
              correctAnswer={this.state.quizQuestions[this.state.quizIndex].correctAnswer}
              checkAnswer={this.isAnswerCorrect}
              warning={this.state.noAnswerWarning}
              type={this.state.quizQuestions[this.state.quizIndex].questionType} /> 

          : <CircularProgress size={80} thickness={5} />}


          <Dialog
          title={this.state.currentAnswer ? "Correct!" : "Incorrect! :("}
          actions={this.state.lastQuestion ? actions[1] : actions[0]}
          modal
          open={this.state.dialogOpen} >

            {this.state.quizQuestions
              ? this.state.quizQuestions[this.state.quizIndex].explanation
              : null}

        </Dialog>

      </div>
    );
    }
  }
}


export default Quiz;
