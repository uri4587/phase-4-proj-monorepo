import React from 'react'
import dateFormat from "dateformat";
import {useState, useEffect} from 'react';

function TodoCards({task, tasks, setTasks}) {
  const [showEditForm, setShowEditForm] = useState(false)
  const [changedTask, setChangedTask] = useState({text: "", date_to_complete: "", category: {name: ""}, completed: false})
  const [showCompleted, setShowCompleted] = useState(task.completed)
  const [date, setDate] = useState("")

  const dateComplete = task.date_to_complete.slice(0, 10)
  console.log(dateComplete)
  const newDate = dateComplete.replaceAll('-', '/')

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
        <span 
            style={{marginRight: '375px', marginBottom: '9px'}}
            className="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"
          >
            Delete
            <button
              onClick={(e) => handleDelete(task)}
              type="button"
              className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
            >
              <span className="sr-only">Remove large option</span>
              <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
              </svg>
            </button>
          </span>
          <br></br>
          <ul className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
            {`Task: ${task.text}`}
            
          </ul>
            <br></br>
          <ul className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
            {`Category: ${task.category.name}`}
          </ul>
            <br></br>
          <ul className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
          {`Date to Complete Task: ${dateFormat(newDate , "dddd, mmmm d, yyyy ")}`}
          {/* { `Date to Complete Task: ${task.date_to_complete}` } */}
          </ul>
          <br></br>
          {!showCompleted ? 
            <button
              style={{marginBottom: '10px'}}
              onClick={handleCompleteChange}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800"
            >
              Not Yet Completed Task
            </button>
            :
            <button
              style={{marginBottom: '10px'}}
              onClick={handleCompleteChange} 
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
              >
              Completed Task!
            </button>
            }
          <br></br>
          { showEditForm ? 
          <button 
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={(e) => {setShowEditForm(!showEditForm)}} 
            >
            Edit
          </button>
          :
          <button 
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50"
            onClick={(e) => {setShowEditForm(!showEditForm)}} 
          >
            Edit
          </button>
    
          }
          {showEditForm ? (
            <form onSubmit={handleTaskEditSubmit}>
              <input onChange={handleTextChange} value={changedTask.text} className="text-box" type="text"/>
              <br></br>
              {/* <input onChange={handleDateChange} value={changedTask.date_to_complete} type="date"/>
              <br></br> */}
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