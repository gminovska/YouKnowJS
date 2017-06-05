import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from './Nav';
import LandingPage from './LandingPage';
import HallOfFame from './HallOfFame';
import Quizzes from './Quizzes';

injectTapEventPlugin();


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
      username: '',
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/halloffame" component={HallOfFame} />
                <Route path="/quizzes" component={Quizzes} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
