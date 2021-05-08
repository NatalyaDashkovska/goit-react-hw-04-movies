import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
// class BookView extends Component {
//   state = {
//     books: [],
//   };
//   async componentDidMount() {
//     const res = await Axios.get(`http://localhost:4040/books`);
//     console.log(res);
//     this.setState({ books: res.data });
//   }
//   render() {
//     return (
//       <div>
//         <h1>hahaha</h1>
//         <ul>
//           {this.state.books.map(book => (
//             <li key={book.id}>
//               <Link to={`${this.props.match.url}/${book.id}`}>
//                 {book.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default BookView;

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:4040/books');

    this.setState({ books: response.data });
  }

  render() {
    return (
      <div className="container-fluid">
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BooksView;
