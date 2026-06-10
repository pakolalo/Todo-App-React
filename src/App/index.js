import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

/**
 * App
 *
 * Root component of the todo application.
 * Wraps the entire application with the TodoProvider to provide
 * global state management through context to all child components.
 *
 * @returns {JSX.Element} The app wrapped with TodoProvider context.
 */
function App() {
    return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
