import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({name: "", email: "", username: "", password: ""})
    const [errors, setErrors] = useState([])
    
    
    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(newUser => {
            if(newUser.error){
                setErrors(newUser.error)
            }
            else {
                navigate('/login')
            }
        })


    }



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
    
    <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSignUpSubmit}>
            <input onChange={handleNameSignUp}type="text" value={newUser.name} placeholder="Enter Full Name" />
            <input onChange={handleEmailSignUp}type="text" value={newUser.email} placeholder="Enter Email" />
            <input onChange={handleUserNameSignUp}type="text" value={newUser.username} placeholder="Enter Username" />
            <input onChange={handlePasswordSignup}type="password" value={newUser.password} placeholder="Enter Password" />
            {errors?errors.map((e,index) => <div key={index} className='error-message'>{e}</div>):null}
            <button className="submit">Login</button>
        </form>
    </div>
  )
}

export default SignUp