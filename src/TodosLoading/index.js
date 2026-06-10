import React from 'react';
import './TodosLoading.css';

/**
 * TodosLoading
 *
 * Skeleton loading component that displays a placeholder while todos are loading.
 * Shows animated skeleton elements mimicking the structure of a real todo item.
 *
 * @returns {JSX.Element} A loading placeholder with skeleton UI elements.
 */
function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };