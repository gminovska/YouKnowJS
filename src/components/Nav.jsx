import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

const UserNavButtons = ({ username, logout }) => (
  <div className="navButtons">
    <div className="welcomeMsg">Hello, {username}!</div>
    <Link to="/halloffame"><FlatButton label="Hall of Fame" /></Link>
    <FlatButton label="Logout" onTouchTap={logout} />
  </div>
);


UserNavButtons.propTypes = {
  username: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

const GuestNavButtons = ({ showLoginForm, showSignupForm }) => (
  <div className="navButtons">
    <div className="welcomeMsg">Hello, stranger!</div>
    <Link to="/halloffame"><FlatButton label="Hall of Fame" /></Link>
    <FlatButton label="Log in" onTouchTap={showLoginForm} />
    <FlatButton label="Sign up" onTouchTap={showSignupForm} />
  </div>
);

GuestNavButtons.propTypes = {
  showLoginForm: PropTypes.func.isRequired,
  showSignupForm: PropTypes.func.isRequired,
};


class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      username: undefined,
      loginDialogOpen: false,
      signupDialogOpen: false,
      logoutDialogOpen: false,
    };
  }

  handleLogout = () => {
    this.setState({ logged: false, username: undefined, logoutDialogOpen: true });
  }

  closeLogoutDialog = () => {
    this.setState({ logoutDialogOpen: false });
  }

  openLoginDialog = () => {
    this.setState({ loginDialogOpen: true });
  }

  closeLoginDialog = () => {
    this.setState({ loginDialogOpen: false });
  }

  openSignupDialog = () => {
    this.setState({ signupDialogOpen: true });
  }

  closeSignupDialog = () => {
    this.setState({ signupDialogOpen: false });
  }

  render() {
    const logoutActions = [
      <FlatButton
        label="OK"
        primary
        keyboardFocused
        onTouchTap={this.closeLogoutDialog}
      />,
    ];

    const loginActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeLoginDialog}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.closeLoginDialog}
      />,
    ];

    const signupActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.closeSignupDialog}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.closeSignupDialog}
      />,
    ];

    return (
      <div>
        <AppBar
          title="YouKnowJS"
          showMenuIconButton={false}
          iconElementRight={this.state.logged
                              ? <UserNavButtons
                                username={this.state.username}
                                logout={this.handleLogout}
                              />
                              : <GuestNavButtons
                                showLoginForm={this.openLoginDialog}
                                showSignupForm={this.openSignupDialog}
                              />}
        />
        <Dialog
          title="Logged out"
          actions={logoutActions}
          modal={false}
          open={this.state.logoutDialogOpen}
          onRequestClose={this.closeLogoutDialog}
        >
          You have been logged out.
        </Dialog>
        <Dialog
          title="Log in"
          actions={loginActions}
          modal={false}
          open={this.state.loginDialogOpen}
          onRequestClose={this.closeLoginDialog}
        >
          This is a login form
        </Dialog>
        <Dialog
          title="Sign up"
          actions={signupActions}
          modal={false}
          open={this.state.signupDialogOpen}
          onRequestClose={this.closeSignupDialog}
        >
          This is a signup form
        </Dialog>
      </div>
    );
  }
}


export default Nav;
