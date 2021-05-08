import Axios from 'axios';
import React, { Component } from 'react';
import routes from '../routes';

class BookDetailsView extends Component {
  state = {
    imgUrl: null,
    title: null,
    descr: null,
    genre: null,
    authorId: null,
    id: null,
  };
  async componentDidMount() {
    const { BookId } = this.props.match.params;
    console.log(BookId);
    const res = await Axios.get(`http://localhost:4040/books/${BookId}`);
    console.log(res.data);
    this.setState({ ...res.data });
  }
  handleGoBack = () => {
    const { location, history } = this.props;

    //     if (location.state && location.state.from) {
    //       return history.push(location.state.from);
    //  }

    // history.push(routes.books);

    history.push(location?.state?.from || routes.books);
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Back
        </button>
        <h1>book page {this.props.match.params.BookId}</h1>
        <img src={this.state.imgUrl} alt="" />
        <h2>{this.state.title}</h2>
        <p>{this.state.descr}</p>
        <p>{this.state.genre}</p>
      </div>
    );
  }
}

export default BookDetailsView;
