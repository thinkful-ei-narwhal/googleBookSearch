import React from 'react'
import Print from './Print'
import Filter from './Filter'

function Input(props) {
  return (
    <div>
      <form>
        <input type='text' placeholder="Type all the things">{props.val}</input>
        <button onClick={props.fetchBooks}>Get all the things</button>
        <Print />,
          <Filter />
      </form>
    </div>
  )
}
export default Input;