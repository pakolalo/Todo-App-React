import React from 'react';
import { TodoIcon } from './index';

/**
 * DeleteIcon
 *
 * Icon component for deleting a todo.
 * Displays a gray delete icon that triggers the delete action when clicked.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onDelete - Callback function when delete icon is clicked
 * @returns {JSX.Element} A clickable delete icon.
 */
function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon };