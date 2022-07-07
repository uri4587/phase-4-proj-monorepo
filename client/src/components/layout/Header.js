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
    navigate("/login")

  })
  }
  return (
    <nav>
      <div className="md:flex md:items-center md:justify-between" style={{backgroundColor: "#ccccff"}}>
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate" style={{marginLeft:'10px'}}>What ToDo?</h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        {isLogin ? 
          <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <NavLink to="/">Home</NavLink></button> 
        : 
        null}
        {isLogin ?  
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            <h4>Welcome {`${currentUser.name}!`} <FaSmileBeam /></h4>
          </ span> 
        : 
          null}
        
          {isLogin ? 
          <button type="button" 
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
          onClick={handleLogOut}>
            LogOut 
          </button> : 
          <NavLink to="/login">
            {<button type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
            </button>}
          </NavLink>}
      </div>
    </div>
    </nav>
  )
}

export default Header