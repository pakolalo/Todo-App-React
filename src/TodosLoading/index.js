import React from 'react';
import './TodosLoading.css';

/**
 * TodosLoading
 *
 * Search component inside the todo application.
 * Keeps local state `searchValue` and updates it
 * when the user types in the input.
 *
 * @returns {JSX.Element} A controlled text field for searching todos.
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