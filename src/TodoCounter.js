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
function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">You have completed <span>{completed}</span> of <span>{total}</span> TODOS</h1>
  );
}

export { TodoCounter };