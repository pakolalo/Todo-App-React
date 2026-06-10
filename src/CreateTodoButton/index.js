import './CreateTodoButton.css'

/**
 * CreateTodoButton
 *
 * A button component that toggles the todo creation modal.
 * When clicked, it toggles the modal state between open and closed.
 *
 * @param {Object} props - Component props
 * @param {Function} props.setOpenModal - Function to toggle modal state
 * @returns {JSX.Element} A button with a plus (+) symbol to create new todos.
 */
function CreateTodoButton({ setOpenModal }) {
  return (
    <button 
    className="CreateTodoButton"
    onClick={
      () => setOpenModal(state => !state)
    }
    >+</button>
  );
}

export { CreateTodoButton };