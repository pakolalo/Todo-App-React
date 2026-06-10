import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

/**
 * TodoItem
 *
 * Renders a single todo item in the list.
 * Displays the todo text with strike-through styling if completed,
 * along with complete and delete action buttons.
 *
 * @param {Object} props - Component props
 * @param {string} props.text - The todo text to display
 * @param {boolean} props.completed - Whether the todo is completed
 * @param {Function} props.onComplete - Callback when complete icon is clicked
 * @param {Function} props.onDelete - Callback when delete icon is clicked
 * @returns {JSX.Element} A list item containing todo content and action icons.
 */
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
        completed={props.completed} 
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };