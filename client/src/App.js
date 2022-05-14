import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/layout/Header'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import {useState, useEffect} from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const fetchCurrentUser = () => {
    fetch('/authorized_user')
    .then(res => res.json())
    .then(currentUser => {
      if (currentUser) {
        setCurrentUser(currentUser)
        setIsLogin(true)
        setTasks(currentUser.tasks)
      }
    })
  }
  useEffect(fetchCurrentUser, [])

  // console.log(tasks)

  return (
    <>
    <Header isLogin={isLogin} setCurrentUser={setCurrentUser} setIsLogin={setIsLogin} setTasks={setTasks} currentUser={currentUser}/>
    <Routes>
      <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} isLogin={isLogin} currentUser={currentUser}/> }  />
      <Route path="/login" element={<Login setIsLogin={setIsLogin} setCurrentUser={setCurrentUser} setTasks={setTasks} /> } />
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
    </>
  );
}

export default App;
