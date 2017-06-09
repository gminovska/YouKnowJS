import React from 'react';



const QuizGrid = () => (
  <p>Quiz grid component</p>
);

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

  componentDidMount = () => {
    fetch('/api/allquizzes')
      .then( (response) => response.json())
      .then( this.setState({ quizData: response.data }))
  }

  render() {
    return (
      <div>
      {this.state.quizData ? <QuizGrid /> : <Loader />}
      </div>
    )
  }
}

export default Quizzes;
