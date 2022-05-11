import React from 'react'
import dateFormat from "dateformat";

function TodoCards({task}) {

console.log(task)
const handleCheckbox = (e) => {
    console.log(e.target.value)
}
  return (
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
    </div>
  )
}

export default TodoCards