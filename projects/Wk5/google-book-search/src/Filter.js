import React from 'react'

function Filter(props) {
  return (
    <div>
      <select>
        <option>ebooks</option>
        <option>free-ebooks</option>
        <option>full</option>
        <option>paid-ebooks</option>
        <option>partial</option>
      </select>
    </div>
  )
}

export default Filter;