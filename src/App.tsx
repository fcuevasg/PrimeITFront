import './App.css';
import { ToDoContextProvider } from './context/ToDoContext';
import HomePage from './pages/homePage';

function App() {
  return (
    // <ToDoContextProvider>
    <HomePage />
    // </ToDoContextProvider>
  );
}

export default App;
