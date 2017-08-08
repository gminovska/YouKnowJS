import React from 'react';
import axios from 'axios';
import Loader from 'material-ui/CircularProgress';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';



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
      .catch((err) => { this.setState({ errMsg: "You need to be logged in"}) })
  }

  render() {

    const fontSize = window.innerWidth > 400 ? "16px" : "11px";

    const errMsg = this.state.errMsg;
    const quizzes = this.state.quizzes;

    const styles = {
      textAlign: "center", 
      paddingTop: "30px",
      fontSize: fontSize  
    }

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
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn style={styles}>Date</TableHeaderColumn>
                  <TableHeaderColumn style={styles}>Quiz</TableHeaderColumn>
                  <TableHeaderColumn style={styles}>Score</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} stripedRows={true}>
                {quizzes.map(quiz => (
                  <TableRow key={quiz.date}>
                    <TableRowColumn style={styles}>
                      {quiz.date.substring(0, quiz.date.indexOf("T"))}
                    </TableRowColumn>
                    {/*TODO change the props from quiz._id to something else. See also User model and Quiz component line 69 */}
                    <TableRowColumn style={styles}>{quiz._id.name}</TableRowColumn>
                    <TableRowColumn style={styles}>{(quiz.score * 100) + "%"}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      }
    }
      
    
  }
}


export default Scoreboard;
 