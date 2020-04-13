import React from 'react'

function Filter(props) {
  return (
    <div>
      <select value={props.filter} onChange={props.submit} >
        <option value="ebooks">ebooks</option>
        <option value="free-ebooks">free-ebooks</option>
        <option value="full">full</option>
        <option value="paid-ebooks">paid-ebooks</option>
        <option value="partial">partial</option>
      </select>
    </div>
  )
}

export default Filter;