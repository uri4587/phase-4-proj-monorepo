import {useState} from 'react'

function TodoForm({tasks, setTasks}) {
    const [newTask, setNewTask] = useState({text: "", date_to_complete: "", category: {name: ""}})

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/tasks', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(newTask)
        })
        .then(resp => resp.json())
        .then(newTask => {setTasks([newTask, ...tasks])})
    }

    const handleTextChange = (e) => {
        // console.log(e.target.value)
        setNewTask({...newTask, text: e.target.value})
    }
    const handleDateChange = (e) => {
        // console.log(e.target.value)
        setNewTask({...newTask, date_to_complete: e.target.value})
    }
    const handleSelectChange = (e) => {
        console.log(e.target.value)
        setNewTask({...newTask, category: {name: e.target.value}})
    }

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="todo">Todo</label>
            <input onChange={handleTextChange} value={newTask.text} className="text-box" type="text"/>
        </p>
        <p>
            <label htmlFor="date-to-complete">Date to Complete</label>
            <input onChange={handleDateChange} value={newTask.date_to_complete} type="date"/>
        </p>
        <p>
            <label htmlFor="category">Choose Category</label>
            <select onChange={handleSelectChange} value={newTask.category.name} name="category" id="category">
                <option value="none" >Select an Option</option>
                <option value="Chores">Chores</option>
                <option value="Work">Work</option>
                <option value="Fun">Fun</option>
                <option value="Family">Family</option>
                <option value="SUPER IMPORTANT!!!!!">Important</option>
            </select>
        </p>
        <input type="submit" value="Submit"/>
    </form>
  )
}

export default TodoForm