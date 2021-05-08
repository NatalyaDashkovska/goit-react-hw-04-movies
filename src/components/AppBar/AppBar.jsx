import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';
const AppBar = () => {
  return (
    <header className={styles.appBar}>
      <Navigation />
    </header>
  );
};

export default AppBar;
