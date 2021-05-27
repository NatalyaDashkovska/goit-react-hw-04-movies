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
  async SearchCast(id, type) {
    try {
      const data = await ApiService.SearchCast(id, type);

      this.setState({ cast: data });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    // console.log(this.props.location);
    const { state } = this.props.location;
    this.SearchCast(state.id, state.type);
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
