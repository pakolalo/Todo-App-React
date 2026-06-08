import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button 
    className="CreateTodoButton"
    onClick={(event) => alert(event)}
    >+</button>
  );
}

export { CreateTodoButton };