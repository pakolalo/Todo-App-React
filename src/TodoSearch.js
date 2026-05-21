import React from 'react';
import './TodoSearch.css'

/**
 * TodoSearch
 *
 * Search component inside the todo application.
 * Keeps local state `searchValue` and updates it
 * when the user types in the input.
 *
 * @returns {JSX.Element} A controlled text field for searching todos.
 */
function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
      className="TodoSearch"
      placeholder="Type to search..."
      value={searchValue}
      onChange={(event) => {setSearchValue(event.target.value)}}
    />
  );
}

export { TodoSearch };