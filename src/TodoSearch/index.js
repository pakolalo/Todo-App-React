import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

/**
 * TodoSearch
 *
 * Input component that filters todos by search query.
 * Updates the global search value in context as the user types.
 *
 * @returns {JSX.Element} A controlled text input field for searching todos.
 */
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
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