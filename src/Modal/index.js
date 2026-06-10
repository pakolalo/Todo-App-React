import React from "react";
import ReactDom from "react-dom";
import './Modal.css';

/**
 * Modal
 *
 * Portal component that renders content in a separate DOM node.
 * Renders its children in a modal container outside the main DOM tree
 * to prevent CSS stacking context issues.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to render inside the modal
 * @returns {React.Portal} A portal containing the modal background and children.
 */
function Modal({ children }) {
    return ReactDom.createPortal(
        <div className="ModalBackground">
            { children }
        </div>,
        document.getElementById('modal')
    );
};

export { Modal };