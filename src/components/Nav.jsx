import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const UserNavButtons = ({username, logout}) => (
  <div className="navButtons">
    <div className="welcomeMsg">Hello, {username}!</div>
    <Link to="/halloffame"><FlatButton label="Hall of Fame"/></Link>
    <FlatButton label="Logout" onTouchTap={logout}/>
  </div>
);

UserNavButtons.propTypes = {
  username: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

const GuestNavButtons = ({showLoginForm, showSignupForm}) => (
  <div className="navButtons">
    <div className="welcomeMsg">Hello, stranger!</div>
    <Link to="/halloffame"><FlatButton label="Hall of Fame"/></Link>
    <FlatButton label="Log in" onTouchTap={showLoginForm}/>
    <FlatButton label="Sign up" onTouchTap={showSignupForm}/>
  </div>
);

GuestNavButtons.propTypes = {
  showLoginForm: PropTypes.func.isRequired,
  showSignupForm: PropTypes.func.isRequired
};



class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      errorMsg: undefined,
      loginDialogOpen: false,
      signupDialogOpen: false,
      logoutDialogOpen: false
    };
  }

  componentDidMount = () => {
    fetch('/api/authenticate', {credentials: "include"})
      .then(res => {
        if(!res) return Promise.reject("Wrong password or email")
        return res.json();
      })
      .then(
        json => { this.setState(() => ({
          user: json
        })) },
        err => { console.log(err) }
      )
  }

  handleLogout = () => {
    fetch('/api/logout', {credentials: "include"})
      .then(
        res => {
          this.setState({user: false, logoutDialogOpen: true});
        }
      )
  }

  closeLogoutDialog = () => {
    this.setState({logoutDialogOpen: false});
  }

  openLoginDialog = () => {
    this.setState({loginDialogOpen: true});
  }

  closeLoginDialog = () => {
    this.setState({loginDialogOpen: false});
  }

  openSignupDialog = () => {
    this.setState({signupDialogOpen: true});
  }

  closeSignupDialog = () => {
    this.setState({signupDialogOpen: false});
  }



  render() {
    const logoutActions = [< FlatButton label = "OK" primary keyboardFocused onTouchTap = {
        this.closeLogoutDialog
      } />];

    const loginActions = [ 
      < RaisedButton 
          label = "Cancel"
          primary 
          onTouchTap = {this.closeLoginDialog} />,
      < RaisedButton 
          label = "Submit" 
          primary 
          type="submit"
          keyboardFocused 
          onTouchTap = {this.closeLoginDialog} />
    ];

    const signupActions = [ 
      < RaisedButton 
          label = "Cancel" 
          primary 
          onTouchTap = {this.closeSignupDialog} />,
      < RaisedButton 
          type="submit" 
          label = "Submit" 
          primary 
          keyboardFocused 
          onTouchTap = {this.closeSignupDialog} />
    ];

    return (
      <div>
        <AppBar
          title="YouKnowJS"
          showMenuIconButton={false}
          iconElementRight={this.state.user
          ? <UserNavButtons username={this.state.user.username} logout={this.handleLogout}/>
          : <GuestNavButtons
            showLoginForm={this.openLoginDialog}
            showSignupForm={this.openSignupDialog}/>}/>
        <Dialog
          title="Logged out"
          actions={logoutActions}
          modal={false}
          open={this.state.logoutDialogOpen}
          onRequestClose={this.closeLogoutDialog}>
          You have been logged out.
        </Dialog>
        <Dialog
          title="Log in"
          modal
          errorMsg = {this.state.errorMsg}
          open={this.state.loginDialogOpen}
          onRequestClose={this.closeLoginDialog}>
          <form action="/api/login" method="POST">
            <TextField name="username" floatingLabelText="Email address"/><br/>
            <TextField name="password" floatingLabelText="Password"/><br/>
            {loginActions}
          </form>
          
        </Dialog>
        <Dialog
          title="Sign up"
          modal
          open={this.state.signupDialogOpen}
          onRequestClose={this.closeSignupDialog}>
          <form action="/api/signup" method="POST">
            <TextField name="email" floatingLabelText="Email address"/><br/>
            <TextField name="password" floatingLabelText="Password"/><br/>
            {signupActions}
          </form>
        </Dialog>
      </div>
    );
  }
}

export default Nav;
