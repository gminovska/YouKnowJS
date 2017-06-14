import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { yellow500, darkBlack } from 'material-ui/styles/colors';
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
import Quiz from './Quiz.jsx';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: yellow500,
    textColor: darkBlack,
  },
  appBar: {
    textColor: darkBlack,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/halloffame" component={HallOfFame} />
            <Route path="/quizzes" component={Quizzes} />
            <Route to="/quizpage" component={Quiz} />
            <Route render={() => (<p>404 - Not found </p>)} />
          </Switch>
        </div>
      </Router>
    </div>
  </MuiThemeProvider>
);


export default App;

