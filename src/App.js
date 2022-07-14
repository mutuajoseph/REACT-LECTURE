import './App.css';
import CreateTask from './components/CreateTask';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

const tasks = [
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
  return (
    <div className="App">
      <Navbar />
      <CreateTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
