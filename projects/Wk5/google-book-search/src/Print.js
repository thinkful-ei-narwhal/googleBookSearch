import React from 'react'

function Print(props) {
  return (
    <div>
      <select value={props.printType} onChange={props.submit}>
        <option value="All">All</option>
        <option value="Magazine">Magazine</option>
        <option value="Books">Books</option>
      </select>
    </div>
  )
}

export default Print;