import React from 'react';
import QuizGrid from './QuizGrid';




const Loader = () => (
  <p>Loading...</p>
);


class Quizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      quizData: undefined,
    }
  }

  componentDidMount() {
    fetch('/api/allquizzes')
      .then( (response) => response.json())
      .then( (response) => {this.setState({
          quizData: response
      })
    })
  }

  render() {
    return (
      <div>
      {this.state.quizData ? <QuizGrid quizzes={this.state.quizData}/> : <Loader />}
      </div>
    )
  }
}

export default Quizzes;
