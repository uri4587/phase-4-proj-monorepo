import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
function Login({setCurrentUser, setIsLogin, setTasks}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const navigate = useNavigate()

const handleUserSubmit = (e) => {
    e.preventDefault()

    const user = {
        username: username.toLowerCase(), 
        password: password
    }
    fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json()
            .then(user=>{
            console.log(user)

            setCurrentUser(user)
            setTasks(user.tasks)
            setIsLogin(true)
            navigate("/")
        })
        } else {

            res.json()
            .then(json => setError(json.error))
        }
        })
    
}

const handleUserNameChange = (e) => {
setUsername(e.target.value)
}
const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    }
  return (
    <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleUserSubmit}>
            <input onChange={handleUserNameChange}type="text" value={username} placeholder="Enter Username" />
            <input onChange={handlePasswordChange}type="password" value={password} placeholder="Enter Password" />
            {error?<div className='error-message'>{error}</div>:null}
            <button className="submit">Login</button>
            <h4>Do not have an account? <Link to="/signup">Sign Up Here</Link> </h4>
        </form>
    </div>
  )
}

export default Login