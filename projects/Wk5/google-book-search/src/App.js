import React from 'react';
import './App.css';
import Input from './Input'


//API options are 1. "q" is a required string:
// A: create a form with an input field that accepts a string
// B: have that string value returned as "q" in our API on "submit"

//2 optional parameters: we want to Filter by a string "ebooks, free-ebooks full paid-ebooks partial"
//3 optional parameter: we want to filter by a string "printType" "all, books magazines" 


//display a list of the books from the data returned
class BookList extends React.Component {
  state = {
    searchParams: {
      key: id,
      q: query,
      maxResults,
      filter,
      printType
    },
    books: []
  };
  fetchBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q={this.state.searchParams.q}filter={this.state.searchParams.filter}printType={this.state.searchParams.printType}`)
      .then(res => res.json())
      .then(books => this.setState({ books }));
  }

  handleSearch = () => {
    const
  }
  render() {
    const books = this.state.books.map(book => <li>{books.BookList}</li>);
    // api = this.fetchBooks
    return (

      < div >
        <Input />
      </div >
    );
  }
}


export default BookList;
