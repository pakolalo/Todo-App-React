import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoTitle } from './TodoTitle';

// const defaultTodos = [
//   { text: 'Go to the gym', completed: true },
//   { text: 'Set the meeting', completed: false },
//   { text: 'Drink water', completed: false },
//   { text: 'Help others', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalSorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName);

  let parsedItems;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItems);
  }

  const [item, setItem] = React.useState(parsedItems);

  const saveItem = (newItem) => {
  localStorage.setItem(itemName, JSON.stringify(newItem));
  setItem(newItem);
};

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalSorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

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
    <>
      <TodoTitle />
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
