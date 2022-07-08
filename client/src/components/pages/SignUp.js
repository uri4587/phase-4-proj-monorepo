import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({name: "", email: "", username: "", password: ""})
    const [errors, setErrors] = useState([])
    
    console.log(newUser)
    const errorMap =()=> {errors.map((e) =>{console.log(e)})}

    errorMap()
    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(newUser => {
            console.log(newUser)
            if(newUser.errors){
                console.log(newUser.errors)
                setErrors(newUser.errors)
            }
            else {
                navigate('/login')
            }
        })


    }

console.log(errors.map((e)=>{console.log(e)}))

    const handleUserNameSignUp = (e) => {
        setNewUser({...newUser, username: e.target.value})
    }

    const handleEmailSignUp = (e) => {
        setNewUser({...newUser, email: e.target.value})
    }

    const handleNameSignUp = (e) => {
        setNewUser({...newUser, name: e.target.value})
    }

    const handlePasswordSignup = (e) => {
        setNewUser({...newUser, password: e.target.value})
    }
  return (
    
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2>Create a What ToDo Account</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSignUpSubmit}>
                <button
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) => navigate('/login')}
                >
                    Back to Sign In
                </ button>
                <div>
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <div className="mt-1">
                        <input
                        id="name"
                        name="full-name"
                        onChange={handleNameSignUp}
                        type="text" 
                        required 
                        value={newUser.name} 
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                        id="email"
                        name="email"
                        onChange={handleEmailSignUp}
                        type="email" 
                        required 
                        value={newUser.email} 
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <div className="mt-1">
                        <input
                        id="username"
                        name="username"
                        onChange={handleUserNameSignUp}
                        type="text" 
                        required 
                        value={newUser.username} 
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                        id="password"
                        name="password"
                        onChange={handlePasswordSignup}
                        type="password" 
                        required 
                        value={newUser.password} 
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                {errors ? errors.map((e,index) => <div key={index} className='error-message'>
                    <p className="error">{e[0]}</p>
                    <p className="error">{e[1]}</p>
                </div>):null}
                <button 
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create Account
                </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp