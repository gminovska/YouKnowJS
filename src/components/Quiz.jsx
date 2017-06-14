import React from 'react';
import { matchPath } from 'react-router'


class Quiz extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  componentDidMount() {

// TODO: Refactor so we don't use match
    const match =  matchPath(this.props.location.pathname, {
      path: "/quizzes/:id",
      exact: true,
      strict: false
    });

    let url = "/api" + match.url;

    console.log(this.props.match);
  }

  render() {
    return (
      <div> 
        <p>This is Quiz Component!</p>
      </div>
    );
  }
}


export default Quiz;

