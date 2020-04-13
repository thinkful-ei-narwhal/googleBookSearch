import React from 'react';

function BookList(props) {
  return (
    <li key={props.id}>
      {props.title}{props.author}{props.description} <img src={props.imageLinks} alt="the book cover" />
    </li>
    //key = props.id
  );
}

export default BookList;
