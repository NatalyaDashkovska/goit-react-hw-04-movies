import React from 'react';
import styles from './FilmList.module.css';
import { Link, withRouter } from 'react-router-dom';

const FilmList = ({ movies, location, search }) => {
  console.log(location);

  return (
    <ul className={styles.list}>
      {movies.map(film => (
        <li key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: {
                type: film.media_type || `movie`,
                from: location.pathname,
                search: search,
              },
            }}
          >
            <p className={styles.name}> {film.title || film.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(FilmList);
