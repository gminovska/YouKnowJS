import React from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Loader from 'material-ui/CircularProgress';


class HallOfFame extends React.Component {
  constructor() {
    super();

    this.state ={
      users: undefined,
      error: undefined
    }
  }

  componentDidMount = () => {
    axios.get('/api/halloffame')
      .then(
        (res) => {this.setState(() => ({users: res.data}))}
      )
      .catch((err) => {this.setState(() => ({error: err}))});
  }

  render() {
    if(this.state.error){
      return (
        <div className="halloffame">
          <Paper className="error-msg" zDepth={2}>
            <p>{this.state.error}</p>
            <p>Please try reloading the page</p>
          </Paper>
        </div>
      );
    }
    else {
      return (
          <div className="halloffame">
            <h2>List of users who scored 100% on all the quizzes</h2>
            {!this.state.users
              ? <Loader size={80} thickness={7} />
              : this.state.users.map(item => (
                  <Paper className="user-box" zDepth={2} id={item._id}>
                    {item.username}
                  </Paper>))
            }
          </div>
        );
    }
  }
}

export default HallOfFame;

