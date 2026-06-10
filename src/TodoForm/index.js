import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

/**
 * TodoForm
 *
 * Form component for creating new todos.
 * Handles input from user, validation, and submission.
 * Closes the modal after successful todo creation or on cancel.
 *
 * @returns {JSX.Element} A form with textarea input and cancel/add buttons.
 */
function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={ onSubmit }>
            <label>Write a new todo</label>
            <textarea 
            value={ newTodoValue }
            onChange={ onChange }
            placeholder="Type your new todo here..."
            />
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={ onCancel }
            >Cancel</button>
                <button 
                className="TodoForm-button TodoForm-button--add" 
                type="submit"
            >Add todo</button>
            </div>
        </form>
    );
};

export { TodoForm };