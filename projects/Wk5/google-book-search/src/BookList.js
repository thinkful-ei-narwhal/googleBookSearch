import React from 'react'

function BookList(props) {
  return (

    <li key={props.id}>
      {props.title},
      {props.author},
      {props.description},
      {props.imageLinks}
    </li>
    //key = props.id
  )
}

export default BookList;