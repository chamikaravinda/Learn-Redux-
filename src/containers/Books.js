import React, { Component } from "react";
import Book from "../components/Book";
import { connect } from "react-redux";
import { fetchBooks, fetchBooksError } from "../actions/book.action";
import { deleteBook } from "../actions/book.action";
import { history } from "../index";

class Books extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.onFetch();
  }

  handleEdit(book) {
    history.push({
      pathname: `/edit/${book.id}`,
      state: {
        book: book,
      },
    });
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    } else if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.error.message}
        </div>
      );
    } else {
      return (
        <div>
          <table className="table table-striped">
            <thead>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Action</th>
            </thead>
            <tbody>
              {this.props.books.map((book) => {
                return (
                  <Book
                    key={book.id}
                    book={book}
                    onDelete={this.props.onDelete}
                    onEdit={this.handleEdit.bind(this)}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.booksData.books || [],
    error: state.booksData.error || null,
    isLoading: state.booksData.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => {
      dispatch(fetchBooks());
    },
    onDelete: (id) => {
      dispatch(deleteBook(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Books);
