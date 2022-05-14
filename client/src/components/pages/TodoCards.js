import React from 'react'
import dateFormat from "dateformat";
import {useState, useEffect} from 'react';

function TodoCards({task, tasks, setTasks}) {
  const [showEditForm, setShowEditForm] = useState(false)
  const [changedTask, setChangedTask] = useState({text: "", date_to_complete: "", category: {name: ""}, completed: false})
  const [showCompleted, setShowCompleted] = useState(false)

  console.log(task)


  const setTaskOnArrival = () => {
    if(task) {
      setChangedTask(task)
    }
    
  }
  
  useEffect(setTaskOnArrival , [])

  

// console.log(changedTask)




const handleDelete = (deletedTask) => {
    const id = deletedTask.id

    fetch(`/tasks/${task.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then((resp) => { 
        let resultOfFitler = tasks.filter((eachTask)=> {
            if(eachTask.id !== id){
                return eachTask
            }
        })
        console.log(resultOfFitler)
        setTasks([...resultOfFitler])
    })
}

// const handleTaskPatch = (e) => {
//   const id = task.id

//   fetch(`/tasks/${id}`, 
//   {method: 'Patch', 
//   headers: {'Content-Type': 'application/json'}, 
//   body: JSON.stringify(changedTask)})
//   // .then(resp => resp.json())
//   // .then((changedTask) =>{
//   //   tasks.find((eachTask)=> {
//   //     if(eachTask.id == changedTask.id) {
//   //       eachTask = changedTask
//   //     }
//   //   })
//   // })


// }

const handleTaskPatch = () => {
  const id = task.id
  fetch(`/tasks/${id}`,
  {method: 'PATCH', 
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(changedTask)})
  .then(resp => resp.json())
  .then(updatedTask => {console.log(updatedTask)
    const updateTaskToMap = tasks.map((eachTask)=> {
      if(eachTask.id == updatedTask.id) {
                return updatedTask
              }
      else {
        return eachTask
      }
    })
    setTasks(updateTaskToMap)
})}
const handleCompleteChange = (e) => {
  {setShowCompleted(!showCompleted)}
  setChangedTask({...changedTask, completed: showCompleted})

  handleTaskPatch(changedTask, task.id)
}
const handleTextChange = (e) => {
  setChangedTask({...changedTask, text: e.target.value})
}

const handleDateChange = (e) => {
  setChangedTask({...changedTask, date: e.target.value})
}

const handleSelectChange = (e) => {
  setChangedTask({...changedTask, category: {name: e.target.value}})
}

const handleTaskEditSubmit = (e) => {
  e.preventDefault();

  setShowEditForm(false)

  handleTaskPatch(changedTask, task.id)
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
          {showCompleted ? <button onClick={handleCompleteChange} >Completed Task!</button> : <button onClick={handleCompleteChange} >Not Yet Completed Task</button>}
          <br></br>
          <button onClick={(e) => handleDelete(task)}>Delete</button>
          <button onClick={(e) => {setShowEditForm(!showEditForm)}} >Edit</button>
          {showEditForm ? (
            <form onSubmit={handleTaskEditSubmit}>
              <input onChange={handleTextChange} value={changedTask.text} className="text-box" type="text"/>
              <br></br>
              <input onChange={handleDateChange} value={changedTask.date_to_complete} type="date"/>
              <br></br>
              <select onChange={handleSelectChange} value={changedTask.category.name} name="category" id="category">
                <option value="none" >Select an Option</option>
                <option value="Chores">Chores</option>
                <option value="Work">Work</option>
                <option value="Fun">Fun</option>
                <option value="Family">Family</option>
                <option value="SUPER IMPORTANT!!!!!">Important</option>
              </select>
              <br></br>
              <button>Submit</button>
            </form>

          ) : null }
        </div>
    </div>
    
  )
}

export default TodoCards