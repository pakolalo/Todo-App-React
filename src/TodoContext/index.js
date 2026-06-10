import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

/**
 * TodoProvider
 *
 * Context provider component that manages all todo-related state.
 * Handles todos CRUD operations, search functionality, and modal state.
 * Uses localStorage to persist todos across sessions.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Components consuming the todo context
 * @returns {JSX.Element} A provider wrapping children with todo context.
 */
function TodoProvider({ children}) {
    const { 
    error,
    loading,
    item: todos,
    saveItem: saveTodos,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;

    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    
    return (
        <TodoContext.Provider
            value={{
                addTodo,
                completeTodo,
                completedTodos,
                deleteTodo,
                error,
                loading,
                openModal,
                searchedTodos,
                searchValue,
                setOpenModal,
                setSearchValue,
                totalTodos,
            }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };