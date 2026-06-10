import React from 'react';
import { TodoIcon } from './index';

/**
 * CompleteIcon
 *
 * Icon component that displays the completion status of a todo.
 * Shows a green checkmark if completed, or gray if not completed.
 * Triggers the onComplete handler when clicked.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.completed - Whether the todo is completed
 * @param {Function} props.onComplete - Callback function when icon is clicked
 * @returns {JSX.Element} A clickable icon indicating completion status.
 */
function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color={completed ? "green" : "gray"}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon };