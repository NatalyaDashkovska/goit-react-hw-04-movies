import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FilmList from '../FilmList';
import ApiService from '../../services/api-service';
class SearchByName extends Component {
  state = {
    movies: [],
    name: '',
  };
  componentDidMount() {
    // console.log(this.props);
    // console.log(this.state);
    // if (this.props.location.search) {
    //   ApiService.SearchByName(this.props.location.search)
    //     .then(movies => {
    //       // console.log(movies);
    //       this.setState({ movies: movies });
    //     })
    //     .catch(error => this.setState(error))
    //     .finally(() => {
    //       this.setState({ qu: '' });
    //     });
    // }
    const { name } = this.state;
    const { SearchName } = this.props.search;
    // console.log(this.props.search);
    this.setState({ name: this.props.search });
    name && console.log(this.props.search);
    ApiService.SearchByName(this.props.search)
      .then(movies => {
        // console.log(movies);
        this.setState({ movies: movies });
      })
      .catch(error => this.setState(error))
      .finally(() => {
        this.setState({ qu: '' });
      });
    // console.log(res.data.results);
    // this.setState({ movies: res.data.results });
    // console.log(this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props);
    // console.log(this.state);
    // console.log(this.state);
    const { SearchName } = this.props.search;
    // console.log(this.props.search);
    // console.log(prevState.name);
    // console.log(this.state.name);

    if (this.props.search !== prevState.name) {
      // console.log(111);
      // console.log(this.state.name);
      this.setState({ name: this.props.search });
      ApiService.SearchByName(this.props.search)
        .then(movies => {
          // console.log(movies);
          this.setState({ movies: movies });
        })
        .catch(error => this.setState(error))
        .finally(() => {
          this.setState({ qsq: '' });
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
