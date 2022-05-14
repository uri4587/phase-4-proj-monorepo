import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {FaSmileBeam} from 'react-icons/fa'

function Header({isLogin, setIsLogin, setCurrentUser, setTasks, currentUser}) {
  const navigate = useNavigate

  const handleLogOut = () => {

    fetch('/logout',{
      method:'DELETE'
  })
  .then(()=>{
    setCurrentUser({})
    setIsLogin(false)
    setTasks([])
    navigate("/")

  })

    
  }
  return (
    <nav>
    <div className="nav-bar">
        
        <NavLink to="/" className="home">Home</NavLink>
        {isLogin ? <h4 className="welcome-user">Welcome {`${currentUser.name}!`}   <FaSmileBeam /> </h4> : null}
        {isLogin ? <button onClick={handleLogOut} className="logout">LogOut </button> : <NavLink to="login" className="log-in">Log In</NavLink>}
      
      </div>
    {/* <button className="btn">BTN</button> */}
  </nav>
  )
}

export default Header