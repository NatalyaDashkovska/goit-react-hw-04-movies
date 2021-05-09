import React, { Component } from 'react';

import FilmList from '../FilmList';
import ApiService from '../../services/api-service';
import PropTypes from 'prop-types';
class SearchByName extends Component {
  state = {
    movies: [],
    name: '',
  };
  componentDidMount() {
    // console.log(this.props);

    const query = this.props.search;

    this.setState({ name: query });

    ApiService.SearchByName(query).then(movies => {
      // console.log(movies);
      this.setState({ movies: movies });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const query = this.props.search;

    if (query !== prevState.name) {
      this.setState({ name: query });
      ApiService.SearchByName(query).then(movies => {
        this.setState({ movies: movies });
      });
    }
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>List by search</h1>
        <FilmList movies={this.state.movies} search={this.props.search} />
      </div>
    );
  }
}

export default SearchByName;

SearchByName.propTypes = {
  search: PropTypes.string.isRequired,
};
