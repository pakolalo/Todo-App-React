import React from 'react';
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";

/**
 * AppUI
 *
 * Main component that renders the complete user interface of the todo application.
 * Displays the entire app structure including:
 * - Title and todo counter
 * - Search input for filtering todos
 * - Todo list with multiple states (loading, error, empty, with items)
 * - Button to create new todos
 * - Modal for the todo creation form
 *
 * Extracts from context: loading, error, searchedTodos, completeTodo, deleteTodo,
 * openModal, setOpenModal and searchValue to manage global state.
 *
 * @returns {JSX.Element} The complete application interface.
 */
function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, searchValue } = React.useContext(TodoContext);
  return (
    <>
      <TodoTitle />
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos searchValue={searchValue} />}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      {openModal && (
        <Modal>
        <TodoForm />
      </Modal>
      )}
    </>
  );
}

export { AppUI };
