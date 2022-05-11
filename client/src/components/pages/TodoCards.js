import React from 'react'
import dateFormat from "dateformat";

function TodoCards({task, tasks, setTasks}) {

console.log(task)
const handleCheckbox = (e) => {
    console.log(e.target.value)
}


const handleDelete = (deletedTask) => {
    const id = deletedTask.id

    fetch(`/tasks/${task.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then((resp) => { console.log(resp)
        let resultOfFitler = tasks.filter((eachTask)=> {
            if(eachTask.id !== id){
                return eachTask
            }
        })
        setTasks([...resultOfFitler])
    })

}


  return (
    <div className="column">
        <div className="todo-cards">
          {`Task: ${task.text}`}
          <br></br>
          {`Category: ${task.category.name}`}
          <br></br>
          {`Date to Complete Task: ${dateFormat(task.date_to_complete, "dddd, mmmm dS, yyyy")}`}
          <br></br>
          {task.completed ? <h2>Completed Task!</h2> : <h2>Not Yet Completed</h2>}
          <br></br><p>
              <label htmlFor="completed?">Completed?</label>
              <input onChange={handleCheckbox}type="checkbox"/>
          </p>
          <br></br>
          <button onClick={(e) => handleDelete(task)}>Delete</button>
        </div>
    </div>
    
  )
}

export default TodoCards