import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to={routes.home}
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={styles.link}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
