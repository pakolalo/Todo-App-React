import './TodoList.css'

/**
 * TodoList
 *
 * Container component that renders a list of todo items.
 * Wraps children in an unordered list element.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Todo items and loading/error states to render
 * @returns {JSX.Element} An unordered list containing all passed children.
 */
function TodoList({ children }) {
  return (
    <ul className="TodoList">
        {children}
    </ul>
  );
}

export { TodoList };