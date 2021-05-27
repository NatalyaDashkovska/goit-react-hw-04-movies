import React, { Component } from 'react';
import routes from '../routes';
import { NavLink, Route } from 'react-router-dom';
import ApiService from '../services/api-service';
import noImage from '../images/no-image.png';
import SearchCast from '../components/SearchCast';
import SearchReviews from '../components/SearchReviews';
import PropTypes from 'prop-types';
class FilmView extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
  };
  state = {
    name: '',
    popularity: '',
    overview: '',
    title: '',

    poster_path: '',
    type: '',
    genres: [],
    id: '',
  };
  componentDidMount() {
    // console.log(this.props);
    const { location } = this.props;
    if (location.state === undefined) {
      this.fetchMovie('movie');
    } else {
      this.fetchMovie(location.state.type);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    // console.log(prevProps);
    // console.log(prevState);
    if (prevState.type === '') {
      if (location.state === undefined) {
        this.fetchMovie('movie');
      } else {
        this.fetchMovie(location.state.type);
      }
    }
  }

  fetchMovie = type => {
    const { movieId } = this.props.match.params;

    type !== `tv`
      ? ApiService.SearchMovieById(movieId)
          .then(movieDetails => {
            // console.log(movieDetails);
            this.setState({ ...movieDetails });
          })
          .catch(error => this.setState(error))
          .finally(() => {
            this.setState({ type: type });
          })
      : ApiService.SearchTVById(movieId)
          .then(movieDetails => {
            // console.log(movieDetails);
            this.setState({ ...movieDetails });
          })
          .catch(error => this.setState(error))
          .finally(() => {
            this.setState({ type: type });
          });
  };
  handleGoBack = () => {
    const { location, history } = this.props;
    // console.log(location);
    // console.log(history);
    history.push(location.state?.from || routes.home);
    history.push({ search: location.state.search });
    // console.log(location.state?.from);
  };
  render() {
    const {
      name,
      popularity,
      overview,
      title,
      poster_path,
      genres,
      type,
    } = this.state;

    const baseURL = 'https://image.tmdb.org/t/p/w300';
    const imgURL = baseURL + poster_path;
    const movieId = this.props.match.params.movieId;
    // console.log(this.props);
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Back
        </button>

        <div>
          <img src={(poster_path && imgURL) || noImage} alt={title} />
        </div>
        <div>
          <h2>
            {name}
            {title}
          </h2>
          <p>User score: {popularity}</p>
          <p>Overview: {overview}</p>
          {genres.length > 0 && (
            <>
              <h3>Genres:</h3>
              <ul>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div>
          <h2>Additional information</h2>

          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/cast`,
                  state: {
                    id: movieId,
                    type: type,
                    from: this.props.location?.state?.from,
                    search: this.props.location.state.search,
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                  state: {
                    id: movieId,
                    type: type,
                    from: this.props.location?.state?.from,
                    search: this.props.location.state.search,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          {type && (
            <Route path={`${routes.movieCast}`} component={SearchCast} />
          )}
          {type && (
            <Route path={`${routes.movieReviews}`} component={SearchReviews} />
          )}
        </div>
      </div>
    );
  }
}
export default FilmView;
