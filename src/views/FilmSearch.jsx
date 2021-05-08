import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchByName from '../components/SearchByName';
class FilmSearch extends Component {
  state = {
    searchQuery: '',
  };
  onChangeSearch = search => {
    this.setState({ searchQuery: search });
    // console.log(search);
    // console.log(this.props);
  };
  componentDidMount() {
    const aaa = this.props.history.location.search;
    console.log(aaa.slice(1));
    console.log(1);
    if (aaa) {
      this.setState({ searchQuery: aaa });
    }
    // const { history, location } = this.props;
    // history.push({
    //   pathname: location.pathname,
    //   search: `search=${search}`,
    // });
  }
  componentDidUpdate(prevProps, prevState) {
    // const aaa = this.props.history.location.search;
    // if (aaa) {
    //   this.setState({ searchQuery: aaa });
    // }
    // console.log(this.state.searchQuery);
    // console.log(this.props);
    // if (!this.props.history.location.search) {
    //   // console.log(this.state);
    //   // console.log(this.props.history.location.search);
    //   const { history, location } = this.props;
    //   history.push({
    //     pathname: location.pathname,
    //     search: this.state.searchQuery,
    //   });
    // }
  }

  render() {
    const { searchQuery } = this.state;
    // console.log(searchQuery);
    // console.log(this.props);
    return (
      <>
        <h1>kino</h1>
        <SearchBar onSubmit={this.onChangeSearch} />

        {searchQuery && <SearchByName search={searchQuery} />}
        {/* <SearchByName search={searchQuery} /> */}
      </>
    );
  }
}

export default FilmSearch;
