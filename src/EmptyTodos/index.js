import React from 'react';

/**
 * EmptyTodos
 *
 * Displays a message when there are no todos to show.
 * Shows "Searching..." when the user is filtering todos,
 * or "Create your first todo!" when the list is empty.
 *
 * @param {Object} props - Component props
 * @param {string} props.searchValue - The current search input value
 * @returns {JSX.Element} A message indicating no todos found or to create one.
 */
function EmptyTodos({ searchValue }) {
  return (
    <p>{searchValue ? 'No todos found' : 'Create your first todo!'}</p>
  );
}

export { EmptyTodos };