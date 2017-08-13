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
    <Link to="/scores"><FlatButton label="Your scores" /></Link>
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
        json => {this.setState(() => ({
          user: json.username ? json : false
        })) },
        err => { console.log(err) }
      )
  }

  closeLogoutDialog = () => {
    this.setState({logoutDialogOpen: false, errorMsg: ""});
  }

  openLoginDialog = () => {
    this.setState({loginDialogOpen: true});
  }

  closeLoginDialog = () => {
    this.setState({
      loginDialogOpen: false,
      username: "",
      password: "",
      errorMsg: ""
    });
  }

  openSignupDialog = () => {
    this.setState({signupDialogOpen: true});
  }

  closeSignupDialog = () => {
    this.setState({
      signupDialogOpen: false,
      username: "",
      password: "",
      errorMsg: ""
    });
  }

  handleNameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }


  sendUserData = (route, msg, cb) => {
    const data = {
      username: this.state.username,
      password: this.state.password
    };

    const options = {
      withCredentials: true
    };
    
    axios.post(route, data, options)
      .then(res => {this.setState({user: res.data.user})})
      .then(() => {cb()})
      .then(() => {window.location.reload()})
      .catch(err => {this.setState({errorMsg: msg})})
  }


  loginUser = () => {
    this.sendUserData(
      '/api/login', 
      "Wrong email or password", 
      this.closeLoginDialog
    )
  }

  signupUser = () => {
    this.sendUserData(
      '/api/signup', 
      "Username is taken",
      this.closeSignupDialog
    )
  }

  handleLogout = () => {
    axios.get('/api/logout', {withCredentials: true})
      .then((res) => {this.setState({
        user: res.data.user, 
        logoutDialogOpen: true
        })
      window.location.reload()
      })
      .catch((err) => {this.setState({
        errorMsg: err.message,
        logoutDialogOpen: true
      })})
  }


  render() {
    
    const loginActions = [ 
      < RaisedButton 
          label = "Cancel"
          primary 
          onTouchTap = {this.closeLoginDialog} 
          key = "2" />,
      < RaisedButton 
          label = "Login" 
          primary 
          keyboardFocused 
          onTouchTap = {this.loginUser} 
          key = "3" />
    ];

    const signupActions = [ 
      < RaisedButton 
          label = "Cancel" 
          primary 
          onTouchTap = {this.closeSignupDialog} 
          key="4"/>,
      < RaisedButton 
          label = "Signup" 
          primary 
          keyboardFocused 
          onTouchTap = {this.signupUser}
          key = "5"/>
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
            {this.state.errorMsg
                ? this.state.errorMsg
                : null}
            {signupActions}
        </Dialog>
      </div>
    );
  }
}

export default Nav;
