import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FilmList from '../components/FilmList';
import ApiService from '../services/api-service';
class HomeView extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    // const res = await axios.get(
    //   'https://api.themoviedb.org/3/trending/all/day?api_key=dc8ed4d6ac6c5b8332ba703755398190',
    // );
    // // console.log(res.data.results);
    // this.setState({ movies: res.data.results });
    ApiService.SearchTrends().then(res => this.setState({ movies: res }));
  }
  render() {
    // console.log(this.props.match.url);
    return (
      <div>
        <h1>Trending Today</h1>
        <FilmList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomeView;
