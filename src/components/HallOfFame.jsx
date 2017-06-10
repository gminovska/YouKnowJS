import React from 'react';
import { Link } from 'react-router-dom';

const HallOfFame = () => (
  <div>
    <p>
      This is Hall of Fame
    </p>
    <p>
      <Link to="/">Go back to home page</Link>
    </p>
  </div>
);

export default HallOfFame;
