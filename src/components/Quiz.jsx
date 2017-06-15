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
      quizName: undefined,
      quizQuestions: undefined,
      quizIndex: 0,
      quizQuestionsNumber: undefined,
      lastQuestion: false,
      displayResult: false,
      dialogOpen: false
    }
  }

  componentDidMount() {
    const url = `/api/quizzes/${this.props.match.params.id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          quizName: data.name,
          quizQuestions: data.questions,
          quizQuestionsNumber: data.questions.length
        });
      });
  }

  nextQuestion = () => {
    if(this.state.quizIndex === this.state.quizQuestionsNumber - 1) {
      this.setState(
        () => ({ lastQuestion: true })
      )
    }
    else {
      this.setState((prevState) => ({
      quizIndex: ++prevState.quizIndex
    }));
    }
  }

  calculateScore = () => {
    this.setState(
      () => ({ displayResult: true })
    )
  }

  openDialog = () => {
    this.setState(
      () => ({ dialogOpen: true })
    );
  }

  closeDialog = () => {
    this.setState(
      () => ({ dialogOpen: false })
    );
  }

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
          this.calculateScore();
        }}
      />
    ];

    if(this.state.displayResult) {
      return (
        <Result />
      )
    }
    else {
      return (
      <div>
        {this.state.quizName 
          ? <Question text={ this.state.quizQuestions[this.state.quizIndex].question} submitAnswer={this.openDialog} /> 
          : <CircularProgress size={80} thickness={5} />}

          <Dialog
          title="Explanation"
          actions={this.state.lastQuestion ? actions[1] : actions[0]}
          modal
          open={this.state.dialogOpen}
        >
          This is the explanation
        </Dialog>

      </div>
    );
    }
  }
}


export default Quiz;
