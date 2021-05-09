import React, { Component } from 'react';

import FilmList from '../components/FilmList';
import ApiService from '../services/api-service';
class HomeView extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    ApiService.SearchTrends().then(res => this.setState({ movies: res }));
  }
  render() {
    return (
      <div>
        <h1>Trending Today</h1>
        <FilmList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomeView;

