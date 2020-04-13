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
    searchParams: {
      q: 'bananas',
      maxResults: 5,
      filter: 'ebooks',
      printType: 'all',
    },
    books: [],
  };
  fetchBooks = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=bananas`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          books: res.items,
        })
      );
  };
  // formatObj = () => {
  //   this.state.books.forEach(() =>)
  // };
  // handleSearch = (e) => {};
  render() {
    console.log(this.state.books);
    console.log(this.formatObj());
    const books = this.state.books.map((book) => (
      <BookList
        key={book.id}
        title={book.title}
        author={book.author}
        description={book.description}
        imageLinks={book.imageLinks}
      />
    ));
    console.log(books);
    return (
      <div>
        <Input api={this.fetchBooks} />
        {books}
      </div>
    );
  }
}

export default Books;
