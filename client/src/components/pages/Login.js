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
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" style={{ backgroundColor: 'grey', borderStyle: 'groove'}}>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleUserSubmit} >
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <div className="mt-1">
                            <input
                            id="username"
                            name="username"
                            onChange={handleUserNameChange}
                            type="text"
                            value={username} 
                            placeholder="Enter Username"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <div className="mt-1">
                            <input 
                            id="password"
                            name="password"
                            autoComplete="currentPassword"
                            required
                            onChange={handlePasswordChange}
                            type="password" 
                            value={password} 
                            placeholder="Enter Password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            />
                        </div>
                    </div>
                    {error?<div style={{color: 'red', fontWeight: 'bold'}} className='error-message'>{error}</div>:null}
                    <button 
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Login
                    </button>
                    <h4>
                        Do not have an account? 
                        <Link to="/signup">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx={4} cy={4} r={3} />
                                </svg>
                                Sign Up Here
                            </span>
                        </Link> 
                    </h4>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login