import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import styles from './SearchCast.module.css';
class SearchCast extends Component {
  state = { cast: [] };
  componentDidMount() {
    console.log(this.props);
    // const { name } = this.state;
    // const { SearchName } = this.props.search;
    // // console.log(this.props.search);
    // this.setState({ name: SearchName });
    // name && console.log(this.props.id);
    ApiService.SearchCast(
      this.props.location.state.id,
      this.props.location.state.type,
    )
      .then(data => {
        console.log(data);
        this.setState({ cast: data });
      })
      .catch(error => this.setState(error))
      .finally(() => {
        this.setState({ name: null });
      });
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
                  {/* <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={`portrait ${actor.name}`}
                  /> */}
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
