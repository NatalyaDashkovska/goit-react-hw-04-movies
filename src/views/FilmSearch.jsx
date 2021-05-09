import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchByName from '../components/SearchByName';
import PropTypes from 'prop-types';
class FilmSearch extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
  };
  state = {
    searchQuery: '',
  };
  onChangeSearch = search => {
    this.setState({ searchQuery: search });
    // console.log(search);
  };
  componentDidMount() {
    const query = this.props.history.location.search;

    if (query) {
      this.setState({ searchQuery: query });
    }
  }

  render() {
    const { searchQuery } = this.state;
    // console.log(searchQuery);
    // console.log(this.props);
    return (
      <>
        <SearchBar onSubmit={this.onChangeSearch} />

        {searchQuery && <SearchByName search={searchQuery} />}
      </>
    );
  }
}

export default FilmSearch;
