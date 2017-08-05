import React from 'react';
import axios from 'axios';
import Loader from 'material-ui/CircularProgress';
import { Link } from 'react-router-dom';


class Scoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      quizzes: undefined,
      errMsg: ""
    }
    
  }

  componentDidMount = () => {
    axios.get('/api/scoreboard')
      .then((res) => {
        console.log(res);
        if(res.data.errMsg) {
          this.setState({ errMsg: data.errMsg})
        }
        else {
          this.setState({ quizzes: res.data.quizzes })
        }
       })
      .catch((err) => { this.setState({ errMsg: err}) })
  }

  render() {

    const errMsg = this.state.errMsg;
    const quizzes = this.state.quizzes;

    if (!errMsg && !quizzes) {
      return (
        <div className="scoreboard">
          <Loader size={80} thickness={5} />
        </div>
      )
    }
    else if (errMsg) {
      return (
        <div className="scoreboard">
          <p className="msg">
            {errMsg}
          </p>
        </div>
      )
    }
    else if (Array.isArray(quizzes)) {

      if (quizzes.length === 0) {
        return (
          <div className="scoreboard">
          <p className="msg">
            You have not taken any quizzes yet. 
            <Link to="/quizzes">Try some</Link>.
          </p>
        </div>
        )
      }
      else {
        return (
          <div className="scoreboard">
          yo
          
        </div>
        )
      }
    }
      
    
  }
}


export default Scoreboard;
