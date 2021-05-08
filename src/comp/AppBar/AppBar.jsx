import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
const AppBar = () => {
  return (
    <ul>
      <li>
        <Link to={routes.home}>Home</Link>
      </li>
      <li>
        <Link to={routes.authors}>Authors</Link>
      </li>
      <li>
        <Link to={routes.books}>Books</Link>
      </li>
    </ul>
  );
};

export default AppBar;
