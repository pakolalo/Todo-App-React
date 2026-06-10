import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

/**
 * TodoCounter
 *
 * Displays the number of completed todos out of the total.
 *
 * @param {{ total: number, completed: number }} props
 * @param {number} props.total The total number of todos.
 * @param {number} props.completed The number of completed todos.
 * @returns {JSX.Element} A heading showing completed and total todo counts.
 */
function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    totalTodos === 0
    ? <h2 className="TodoCounter">Loading...</h2>
    : totalTodos === completedTodos
    ? <h2 className="TodoCounter">Congratulations! You've completed all your TODOS!</h2>
    :
    <h2 className="TodoCounter">You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOS</h2>
  );
}

export { TodoCounter };