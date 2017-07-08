import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import QuizGrid from './QuizGrid';
import Quiz from './Quiz';

class Quizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      quizData: undefined,
    }
  }

  componentDidMount() {
    fetch('/api/quizzes')
      .then( (response) =>{ 
        let data = response.json();
        return data;
      })
      .then( (response) => {this.setState({
          quizData: response
      })
    })
  }

  render() {
    return (
      <div>
      {this.state.quizData 
        ? <QuizGrid quizzes={this.state.quizData}/> 
        : <CircularProgress size={80} thickness={5} />
      }
      </div>
    )
  }
}

export default Quizzes;
