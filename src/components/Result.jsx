import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Result extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      userLoggedIn: props.userLoggedIn,
      highScore: props.score/props.total === 1 ? true : false,
      dialogOpen: false,
      ThankyouDialogOpen: false,
      feedbackText: "",
    }
  }

  sendFeedback = () => {
    const data = {
      feedbackText: this.state.feedbackText,
      quizId: this.props.quizId
    };
    const options = {
      withCredentials: true
    }

    axios.post("/api/feedback/new", data, options)
      .then(this.closeDialog)
      .then(this.openThankyouDialog)

  }

  handleChange = (e) => {
    this.setState({feedbackText: e.target.value});
  }

  openDialog = () => {
    this.setState(() => ({ dialogOpen: true }))
  }

  closeDialog = () => {
    this.setState(() => ({ dialogOpen: false }))
  }

  openThankyouDialog = () => {
    this.setState(() => ({ ThankyouDialogOpen: true }))
  }

  closeThankyouDialog = () => {
    this.setState(() => ({ ThankyouDialogOpen: false }))
  }

  render() {

    const feedbackDialogActions = [ 
      < RaisedButton 
          label = "Cancel"
          primary 
          onTouchTap = {this.closeDialog} />,
      < RaisedButton 
          label = "Send" 
          primary 
          type="submit"
          keyboardFocused 
          onTouchTap = {this.sendFeedback} />
    ];

    const ThankyouDialogActions = [
      < RaisedButton
        label="OK"
        primary
        keyboardFocused
        onTouchTap={this.closeThankyouDialog} />
    ]

    return (
      <div className="results-page">
        <Paper className="results-box" zDepth={2}>
          <h2>Congratulations!</h2>
          <p>You have finished the quiz, answering <span className="strong">{this.props.score}</span> out of <span className="strong">{this.props.total}</span> questions!</p>

          <Link to="/quizzes">
            <RaisedButton 
              label="Take another quiz" 
              labelStyle={{color: "#000"}}
              primary 
              className='results-button'/>
          </Link>
          {this.state.highScore && this.state.userLoggedIn
            ? <RaisedButton 
                label="Leave feedback"
                onTouchTap={this.openDialog}
                className='results-button' />
            : null }
        </Paper>

        <Dialog
          title="Leave your feedback about this quiz"
          modal
          actions={feedbackDialogActions}
          open={this.state.dialogOpen}
          onRequestClose={this.closeDialog}>

          <TextField 
            hintText="Tell us your suggestions" 
            multiLine
            id="feedbackField" 
            value={this.state.feedbackText}
            onChange={this.handleChange} />
        </Dialog>

        <Dialog
          title="Thank you"
          actions={ThankyouDialogActions}
          open={this.state.ThankyouDialogOpen}
          onRequestClose={this.closeThankyouDialog}>
            Your feedback have been submitted. 
        </Dialog>
      </div>
    );
  }
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Result;
