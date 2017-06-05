import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];


    return (
      <div className="navbar">
        <NavLink exact activeClassName="activeLink" to="/">
          <RaisedButton label="Home" />
        </NavLink>
        <RaisedButton label="Login" onTouchTap={this.handleOpen} />
        <Dialog
          title="Log in!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          There should be a login form here
        </Dialog>
        <NavLink activeClassName="activeLink" to="/halloffame">
          <RaisedButton label="Swag" />
        </NavLink>
        <NavLink activeClassName="activeLink" to="/quizzes">
          <RaisedButton label="Quizzes" />
        </NavLink>
      </div>
    );
  }
}


export default Nav;
