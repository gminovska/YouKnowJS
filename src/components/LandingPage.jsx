import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <p>
      This is Landing Page
    </p>
    <p>
      <Link to="/quizzes">Take a quiz</Link>
    </p>
  </div>
);

export default LandingPage;
