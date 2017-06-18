import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ score, total }) => {

  return (
    <div>
      You have answered {score}/{total} questions. Wohooo!
    </div>
  );
};

Result.defaultProps = {
  
};

Result.propTypes = {
  
};

export default Result;
