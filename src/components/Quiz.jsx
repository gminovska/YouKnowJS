import React from 'react';
import { matchPath } from 'react-router'
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import Question from './Question';
import Result from './Result';
import RaisedButton from 'material-ui/RaisedButton';


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      quizId: this.props.match.params.id,
      score: 0,
      quizQuestions: undefined,
      quizIndex: 0,
      quizQuestionsNumber: undefined,
      lastQuestion: false,
      displayResult: false,
      dialogOpen: false,
      currentAnswer: null,
      noAnswerWarning: false,
      userLoggedIn: undefined,
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
    axios.post("/api/results/new", {
      _id: this.props.match.params.id,
      score: (this.state.score / this.state.quizQuestionsNumber).toFixed(2)
    }, { withCredentials: true})
      .then(
        (res) => {
          this.setState(
            () => ({ 
              displayResult: true, 
              userLoggedIn: res.data ? true : false})
          )
        }
      )
  }

  openDialog = () => new Promise(resolve => {
      if(!this.state.noAnswerWarning) {
        document.getElementById('answers-form').reset();
        if(this.state.currentAnswer) this.incrementScore();
        this.setState(
          () => ({ dialogOpen: true,
                  noAnswerWarning: false 
                  }), resolve
        );
      }
    })
  

  closeDialog = () => {
    this.setState(
      () => ({ dialogOpen: false, currentAnswer: null })
    );
  }

  verifyAnswer = () => new Promise(resolve => {

    const correctAnswers = this.state.quizQuestions[this.state.quizIndex].correctAnswer
    const userAnswers = Array.from(document.querySelectorAll('.answerBox'))
      .filter(item => item.checked)
      .map(item => Number(item.value));

    if(userAnswers.length === correctAnswers.length) {
      for(const answer of userAnswers) {
        if(!correctAnswers.includes(answer)) {
          this.setState(()=> ({ noAnswerWarning: false, currentAnswer: false }), resolve)
          return;
        }
      }
      this.setState(()=> ({ noAnswerWarning: false, currentAnswer: true }), resolve)
    }
    else {
      if(userAnswers.length === 0) {
        this.setState(() => ({ noAnswerWarning: true }), resolve)
      }
      else{
        this.setState(() => ({ noAnswerWarning: false, currentAnswer: false }), resolve)
      }
    }
  })
  

  render() {

    const actions = [
      <RaisedButton
        label="Next"
        primary
        onTouchTap={() => {
          this.closeDialog();
          this.nextQuestion();
        }}
      />,
      <RaisedButton
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
                total={this.state.quizQuestionsNumber}
                userLoggedIn = {this.state.userLoggedIn}
                quizId={this.props.match.params.id} />
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
                  verifyAnswer={this.verifyAnswer}
                  warning={this.state.noAnswerWarning}
                  type={this.state.quizQuestions[this.state.quizIndex].questionType}
                  progress={this.state.quizIndex}
                  maxProgress={this.state.quizQuestionsNumber} /> 

          : <CircularProgress size={80} thickness={5} />}


          <Dialog
          title={this.state.currentAnswer ? "Correct!" : "Incorrect! :("}
          actions={this.state.lastQuestion ? actions[1] : actions[0]}
          modal
          open={this.state.dialogOpen} >

            {this.state.quizQuestions
              ? <p className="explanation">
                  {this.state.quizQuestions[this.state.quizIndex].explanation}
                </p>
              : null}

        </Dialog>

      </div>
    );
    }
  }
}


export default Quiz;
