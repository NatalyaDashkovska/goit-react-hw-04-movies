import React, { Component, Link } from 'react';
import routes from '../routes';
import { NavLink, Route } from 'react-router-dom';
import ApiService from '../services/api-service';
import noImage from '../images/no-img.jpg';
import SearchCast from '../components/SearchCast';
import SearchReviews from '../components/SearchReviews';
class FilmView extends Component {
  state = {
    film: '',
    name: '',
    popularity: '',
    overview: '',
    title: '',
    isLoading: '',
    poster_path: '',
    type: '',
    genres: [],
  };
  componentDidMount() {
    console.log(this.props);
    const { movieId } = this.props.match.params;
    // console.log(this.props.location.state.type);
    const { type } = this.props.location.state;
    // console.log(type);
    // const type = this.props.location.state.type || `movie`;
    // this.setState({ type: type });

    type !== `tv`
      ? ApiService.SearchMovieById(movieId)
          .then(movieDetails => {
            // console.log(movieDetails);
            this.setState({ ...movieDetails });
          })
          .catch(error => this.setState(error))
          .finally(() => {
            this.setState({ type: '' });
          })
      : ApiService.SearchTVById(movieId)
          .then(movieDetails => {
            // console.log(movieDetails);
            this.setState({ ...movieDetails });
          })
          .catch(error => this.setState(error))
          .finally(() => {
            this.setState({ type: '' });
          });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };
  render() {
    const {
      name,
      popularity,
      overview,
      title,
      poster_path,
      genres,
    } = this.state;
    const { film } = this.state;
    // console.log(this.state);
    const { url, path } = this.props.match;
    // console.log(url);
    // console.log(path);
    const baseURL = 'https://image.tmdb.org/t/p/w300';
    const imgURL = baseURL + poster_path;
    // const { genres } = film;
    // const type = this.props.location.state.type || this.state.type;
    const { aaa } = this.props.match.params.movieId;
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Back
        </button>

        {/* <div>
          <img src={poster_path && imgURL} alt={title} />
        </div> */}
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
          <ul></ul>
        </div>
        <div>
          <h2>Additional information</h2>

          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${this.props.match.params.movieId}/cast`,
                  state: {
                    id: this.props.match.params.movieId,
                    type: this.state.type,
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `/movies/${this.props.match.params.movieId}/reviews`,
                  state: {
                    id: this.props.match.params.movieId,
                    type: this.state.type,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          {this.state.type && (
            <Route path={`${routes.movieCast}`} component={SearchCast} />
          )}
          {this.state.type && (
            <Route path={`${routes.movieReviews}`} component={SearchReviews} />
          )}
        </div>
      </div>
    );
  }
}
export default FilmView;
