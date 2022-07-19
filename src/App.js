import { useState, useEffect } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

const data = [
  {
    title: "Visit the market",
    isCompleted: false,
  },
  {
    title: "Watch a react video",
    isCompleted: false,
  },
  {
    title: "Attend a react lecture",
    isCompleted: false,
  },
  {
    title: "Go for a swim",
    isCompleted: false,
  }
]

function App() {

  const [todos, setTodos] = useState([])
  const [user, setUser] = useState({
    firstName: "Mark",
    lastName: "Doe",
    avatarUrl: "jhbhhjdfgvf"
  })

  const [todo, setTodo] = useState("")

  // fetch some task from api
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData =  () => {
    setTodos(data)
  }

  // handleInputChange => onChange
  const handleTodoInput = (e) => {
    setTodo(e.target.value)
  }

  // handleSubmitChange => onClick
  const handleTodoSubmit = (e) => {
    e.preventDefault()

    // contstruct our todo object
    const newTodo = {
      title: todo,
      isComplete: false
    }

    // we need to update our array of todos with the new object ?
    
    setTodos([newTodo,...todos])
    setTodo("")
  }
  
  return (
    <div className="App">
      <Navbar user={user} />
      <CreateTask todo={todo} handleTodoInput={handleTodoInput} handleTodoSubmit={handleTodoSubmit} />
      <TaskList tasks={todos} />
    </div>
  );
}

export default App;
