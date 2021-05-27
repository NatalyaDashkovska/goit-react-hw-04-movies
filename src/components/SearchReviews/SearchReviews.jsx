import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import styles from './SearchReviews.module.css';
import PropTypes from 'prop-types';
class SearchReviews extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
  };
  state = { reviews: [] };

  async searchReviews(id, type) {
    try {
      const data = await ApiService.SearchReviews(id, type);

      this.setState({ reviews: data });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    const { state } = this.props.location;
    // console.log(this.props);

    this.searchReviews(state.id, state.type);
  }
  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length === 0 && (
          <h3>We don`t have any reviews for this movie</h3>
        )}
        <ul className={styles.list}>
          {reviews.map(review => (
            <li key={review.id}>
              <p> Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default SearchReviews;
