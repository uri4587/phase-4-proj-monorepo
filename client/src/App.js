import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/layout/Header'
import {useState, useEffect} from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  const fetchData = () => {
    fetch('/tasks')
    .then(resp => resp.json())
    .then(tasks => {
      setTasks(tasks)})
  }
  useEffect(fetchData, [])

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} /> }  />
    </Routes>
    </>
  );
}

export default App;
