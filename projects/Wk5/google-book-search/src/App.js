import React from 'react';
import './App.css';
import Input from './Input';
import BookList from './BookList';

//API options are 1. "q" is a required string:
// A: create a form with an input field that accepts a string
// B: have that string value returned as "q" in our API on "submit"

//2 optional parameters: we want to Filter by a string "ebooks, free-ebooks full paid-ebooks partial"
//3 optional parameter: we want to filter by a string "printType" "all, books magazines"

//display a list of the books from the data returned
class Books extends React.Component {
  state = {
    q: 'bananas',
    maxResults: 5,
    filter: 'ebooks',
    printType: 'all',
    books: [],
  };

  handlePrintType = (event) => {
    event.preventDefault();
    this.setState({ printType: event.target.value })
  }

  handleFilter = (event) => {
    event.preventDefault();
    this.setState({ filter: event.target.value })
  }

  fetchBooks = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=bananas&${this.state.filter}&${this.state.printType}&${this.state.maxResults}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          books: res.items,
        })
      );
  };

  render() {
    console.log(this.state.books)
    const books = this.state.books.map((book) => (
      <BookList
        key={book.id}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        description={book.volumeInfo.description}
        imageLinks={book.volumeInfo.imageLinks.thumbnail}

      />
    ));
    // console.log(books);
    return (
      <div>
        <Input api={this.fetchBooks} print={this.handlePrintType} filter={this.handleFilter} />
        {books}
      </div>
    );
  }
}

export default Books;
