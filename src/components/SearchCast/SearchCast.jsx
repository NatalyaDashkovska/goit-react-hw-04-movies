import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import styles from './SearchCast.module.css';
import PropTypes from 'prop-types';
class SearchCast extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
  };
  state = { cast: [] };
  componentDidMount() {
    // console.log(this.props);
    const { state } = this.props.location;

    ApiService.SearchCast(state.id, state.type)
      .then(data => {
        // console.log(data);
        this.setState({ cast: data });
      })
      .catch(error => this.setState(error));
  }
  render() {
    const { cast } = this.state;

    return (
      <ul className={styles.list}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.item}>
            {actor.profile_path && (
              <>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={`portrait ${actor.name}`}
                  />
                </div>
                <div className={styles.description}>
                  <p className={styles.name}>{actor.name}</p>
                  <p> Character: {actor.character}</p>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default SearchCast;
