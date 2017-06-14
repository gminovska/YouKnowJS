import React from 'react';
import { matchPath } from 'react-router'


class Quiz extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  componentDidMount() {

    const match =  matchPath(this.props.location.pathname, {
      path: "/quizpage/:id",
      exact: true,
      strict: false
    });

    let url = "/api" + match.url;

    console.log(url);
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

