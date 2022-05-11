import React from 'react'
import TodoForm from './TodoForm'
import TodoCards from './TodoCards'

function Home({tasks, setTasks}) {

    console.log(tasks)
   
    // const mappingTasks = () => {
    //     tasks.map((task) => { 
    //         return <TodoCards key={task.id} task={task}/>
    //     })
    // }

    function taskMapper(task) {
        return <TodoCards key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
    }
  return (

    <div className="page-container">
        <div className="todo-form">
            <TodoForm task={tasks} setTasks={setTasks}/>
            <br></br>
        </div>
        <div className="card-container">
            <div className="row">
                {tasks.map(taskMapper)}
            </div>
        </div>
    </div>
  )
}

export default Home
