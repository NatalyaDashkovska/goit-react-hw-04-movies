import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import SearchByName from '../SearchByName';
class SearchBar extends Component {
  state = { search: '' };
  formSubmit = e => {
    e.preventDefault();
    // console.log(this.props);
    this.props.onSubmit(this.state.search);

    this.reset();
  };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  reset = () => {
    this.setState({
      search: '',
    });
  };
  render() {
    return (
      <header className={styles.searchbar}>
        <h1>find what you want</h1>
        <form className={styles.searchForm} onSubmit={this.formSubmit}>
          <input
            className={styles.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
            value={this.state.search}
          />
          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button__label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
export default SearchBar;
