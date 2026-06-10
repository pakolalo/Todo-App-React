# React Todo List App

A modern todo application built with React.

## 📋 Features

- ✅ **Create Todos** - Add new tasks to your todo list
- 🔍 **Search & Filter** - Find todos by typing keywords
- ✔️ **Mark Complete** - Toggle todo completion status
- 🗑️ **Delete Todos** - Remove completed or unwanted tasks
- 💾 **Persistent Storage** - Todos are saved to localStorage
- 📊 **Progress Counter** - View how many todos you've completed
- ⚡ **Loading State** - Skeleton UI while data loads
- 🎨 **Modal Dialog** - Create new todos in a clean modal interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd curso-react-intro

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 📁 Project Structure

```
src/
├── App/                    # Root app component and main UI
├── CreateTodoButton/       # Button to open todo creation modal
├── EmptyTodos/            # Component for empty state message
├── Modal/                 # Modal portal component
├── TodoContext/           # Global state management with Context API
│   ├── index.js          # TodoProvider and TodoContext
│   └── useLocalStorage.js # Custom hook for localStorage persistence
├── TodoCounter/          # Component displaying completed/total todos count
├── TodoForm/             # Form for creating new todos
├── TodoIcon/             # Icon components (Complete & Delete)
├── TodoItem/             # Individual todo item component
├── TodoList/             # Container for todo items
├── TodoSearch/           # Search input for filtering todos
├── TodoTitle/            # Application title
├── TodosError/           # Error state component
└── TodosLoading/         # Loading skeleton component
```

## 📦 Available Scripts

### `npm start`

Runs the app in development mode.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
The build is minified and filenames include hashes.\
Your app is ready to be deployed!

## 🏗️ Architecture

### State Management

The app uses **React Context API** for global state management:

- **TodoProvider** - Manages all todo-related state
- **useLocalStorage** - Custom hook for persisting todos to browser storage

### Key Components

| Component | Purpose |
|-----------|---------|
| `AppUI` | Main interface layout and conditional rendering |
| `TodoContext` | Global state and CRUD operations |
| `useLocalStorage` | Data persistence layer |
| `Modal` | Portal for dialogs |
| `TodoForm` | New todo creation |

## 🛠️ Technologies Used

- **React 18** - UI library
- **Context API** - State management
- **localStorage** - Data persistence
- **CSS3** - Styling

## 📝 Usage

1. **Add a Todo** - Click the `+` button to open the modal and enter your task
2. **Search** - Use the search input to filter todos
3. **Complete** - Click the check icon to mark a todo as complete
4. **Delete** - Click the trash icon to remove a todo
5. **View Progress** - See your completion count at the top

## 🎓 Learning Outcomes

This project demonstrates:

- Component composition and reusability
- React Hooks (useState, useEffect, useContext)
- Custom hooks development
- Context API for state management
- Event handling and form management
- Conditional rendering
- List rendering with keys
- LocalStorage integration
- CSS styling best practices

## 📚 Resources

- [React Documentation](https://react.dev)
- [Create React App Docs](https://facebook.github.io/create-react-app)

## 💡 Notes

- Todos are automatically saved to localStorage
- There's a 2-second simulated delay when loading data (for UX demonstration)
- The search is case-insensitive

---


To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
