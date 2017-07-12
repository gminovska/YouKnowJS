import React from 'react';
import { Link } from 'react-router-dom';
import road from '../img/road.jpg';
import RaisedButton from 'material-ui/RaisedButton';
import { darkBlack, grey300 } from 'material-ui/styles/colors';

const styles = {
   backgroundImage: `url(${road})` 
}


const LandingPage = () => (
  <div className="landing-page" 
       style={styles} >
    <div className="main-box">
        <div className="title-box">
          <h1>
          So you think you can JavaScript?
          </h1>
          <h2>You can find out</h2>
        </div>
        <p>
          <Link to="/quizzes">
            <RaisedButton 
              label="Take a quiz" 
              primary
              labelStyle={{ color: darkBlack }} />
          </Link>
        </p>
    </div>
  </div>
);

export default LandingPage;
