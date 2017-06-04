import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul className="navbar">

    <li>
      <NavLink exact activeClassName="activeLink" to="/">
      YouKnowJS
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="activeLink" to="/halloffame">
      Hall of Fame
      </NavLink>
    </li>
    <li>
      <NavLink exact activeClassName="activeLink" to="/quizzes">
      Take a quiz!
      </NavLink>
    </li>

  </ul>
);


export default Nav;
