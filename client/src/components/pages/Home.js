import TodoForm from './TodoForm'
import TodoCards from './TodoCards'
import Login from './Login'
import {useNavigate as navigate} from 'react-router-dom'

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
    <br></br><br></br><br></br>
    {isLogin ?  
        <div className="page-container">
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
        <Login />
  }
    </>
  )
}

export default Home
