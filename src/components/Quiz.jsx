import React from 'react';
import { matchPath } from 'react-router'

import CircularProgress from 'material-ui/CircularProgress';
import Question from './Question.jsx';
import Result from './Result.jsx';


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      quizName: undefined,
      quizQuestions: undefined,
      quizIndex: 0,
      quizQuestionsNumber: undefined,
      lastQuestion: false,
      displayResult: false
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

  render() {
    if(this.state.displayResult) {
      render (
        <Result />
      )
    }
    else {
      return (
      <div>
        {this.state.quizName 
          ? <Question text={ this.state.quizQuestions[this.state.quizIndex].question} submitHandler={this.nextQuestion} last={this.state.lastQuestion} handleLast={this.calculateScore} /> 
          : <CircularProgress size={80} thickness={5} />}
      </div>
    );
    }
  }
}


export default Quiz;
