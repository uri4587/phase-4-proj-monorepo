import React from 'react'
import TodoForm from './TodoForm'
import TodoCards from './TodoCards'

function Home({tasks, setTasks, isLogin, currentUser}) {

    // console.log(tasks)
   
    // const mappingTasks = () => {
    //     tasks.map((task) => { 
    //         return <TodoCards key={task.id} task={task}/>
    //     })
    // }

    function taskMapper(task) {
        // console.log(task)
        return (<TodoCards key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>)
    }


  return (
    <>
    {isLogin ?  <div className="page-container">
            <div className="todo-form">
                <TodoForm tasks={tasks} setTasks={setTasks} currentUser={currentUser}/>
                <br></br>
            </div>
            <div className="card-container">
                <div className="row">
                    {tasks.map(taskMapper)}
                </div>
            </div>
        </div> 

        : 
        <div className="welcome-page-container">
        </div>
  }
    </>
  )
}

export default Home
