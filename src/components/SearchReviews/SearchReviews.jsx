import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import styles from './SearchReviews.module.css';
class SearchReviews extends Component {
  state = { reviews: [] };
  componentDidMount() {
    // console.log(this.props);
    // const { name } = this.state;
    // const { SearchName } = this.props.search;
    // // console.log(this.props.search);
    // this.setState({ name: SearchName });
    // name && console.log(this.props.id);
    ApiService.SearchReviews(
      this.props.location.state.id,
      this.props.location.state.type,
    )
      .then(data => {
        // console.log(data);
        this.setState({ reviews: data });
      })
      .catch(error => this.setState(error))
      .finally(() => {
        this.setState({ name: null });
      });
  }
  render() {
    const { reviews } = this.state;

    return (
      <ul className={styles.list}>
        {reviews.map(review => (
          <li key={review.id}>
            <p> Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default SearchReviews;
