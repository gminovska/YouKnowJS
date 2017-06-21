import React from 'react';
import QuizGrid from './QuizGrid';

import Quiz from './Quiz.jsx';


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
    fetch('/api/quizzes')
      .then( (response) =>{ 
        let data = response.json();
        console.log(data);
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
      {this.state.quizData ? <QuizGrid quizzes={this.state.quizData}/> : <Loader />}
      </div>
    )
  }
}

export default Quizzes;
