import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { darkBlack } from 'material-ui/styles/colors';
import axios from 'axios';

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
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      errorMsg: "",
      loginDialogOpen: false,
      signupDialogOpen: false,
      logoutDialogOpen: false,
      username: "",
      password: ""
    };
  }

  componentDidMount = () => {
    fetch('/api/authenticate', {credentials: "include"})
      .then(res => {
        if(!res) return Promise.reject()
        return res.json();
      })
      .then(
        json => { this.setState(() => ({
          user: json
        })) },
        err => { console.log(err) }
      )
  }

  closeLogoutDialog = () => {
    this.setState({logoutDialogOpen: false});
  }

  openLoginDialog = () => {
    this.setState({loginDialogOpen: true});
  }

  closeLoginDialog = () => {
    this.setState({
      loginDialogOpen: false,
      username: "",
      password: ""
    });
  }

  openSignupDialog = () => {
    this.setState({signupDialogOpen: true});
  }

  closeSignupDialog = () => {
    this.setState({
      signupDialogOpen: false,
      username: "",
      password: ""
    });
  }

  handleNameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  loginUser = () => {

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    const options = {
      withCredentials: true
    };
    
    axios.post('/api/login', data, options)
      .then(res => {this.setState({
        user: res.data.user, 
        errorMsg: ""
      })})
      .then(() => {this.closeLoginDialog()})
      .catch(err => {this.setState({errorMsg: "Wrong email or password"})})
  };

  signupUser = () => {
    axios.post('/api/signup', {
      username: this.state.username,
      password: this.state.password
    })
  }



  render() {
    const logoutActions = [< FlatButton label = "OK" primary keyboardFocused onTouchTap = { this.closeLogoutDialog } />];

    const loginActions = [ 
      < RaisedButton 
          label = "Cancel"
          primary 
          onTouchTap = {this.closeLoginDialog} />,
      < RaisedButton 
          label = "Submit" 
          primary 
          keyboardFocused 
          onTouchTap = {this.loginUser} />
    ];

    const signupActions = [ 
      < RaisedButton 
          label = "Cancel" 
          primary 
          onTouchTap = {this.closeSignupDialog} />,
      < RaisedButton 
          label = "Submit" 
          primary 
          keyboardFocused 
          onTouchTap = {() => {
            this.signupUser();
            this.closeSignupDialog();
          }} />
    ];

    const titleStyle = {
      textDecoration: "none",
      cursor: "pointer",
      width: "150px",
      color: darkBlack
    };

    return (
      <div>
        <AppBar
          title={<Link to="/" style={titleStyle}>YouKnowJS</Link>}
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
          open={this.state.loginDialogOpen}
          onRequestClose={this.closeLoginDialog}>
            <TextField 
              floatingLabelText="Email address"
              onChange={this.handleNameChange}
              value={this.state.username}/>
              <br/>
            <TextField 
              floatingLabelText="Password"
              onChange={this.handlePasswordChange}
              value={this.state.password}/>
              <br/>
              {this.state.errorMsg
                ? this.state.errorMsg
                : null}
            {loginActions}
        </Dialog>

        <Dialog
          title="Sign up"
          modal
          open={this.state.signupDialogOpen}
          onRequestClose={this.closeSignupDialog}>
            <TextField  
              floatingLabelText="Email address"
              onChange={this.handleNameChange}
              value={this.state.username}/>
            <br/>
            <TextField  
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}/>
            <br/>
            {signupActions}
        </Dialog>
      </div>
    );
  }
}

export default Nav;
