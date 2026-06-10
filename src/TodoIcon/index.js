import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

/**
 * TodoIcon
 *
 * Generic icon component that renders SVG icons with customizable type and color.
 * Supports 'check' and 'delete' icon types used throughout the app.
 *
 * @param {Object} props - Component props
 * @param {string} props.type - Type of icon ('check' or 'delete')
 * @param {string} props.color - Color to apply to the icon
 * @param {Function} props.onClick - Callback function when icon is clicked
 * @returns {JSX.Element} A clickable span containing the requested SVG icon.
 */
const iconTypes = {
    "check": (color) => <CheckSVG 
    className="Icon-svg" 
    style={{ color }} 
    fill={color}
    />,
    "delete": (color) => <DeleteSVG 
    className="Icon-svg" 
    style={{ color }} 
    fill={color}
    />,
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };