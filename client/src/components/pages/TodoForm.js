import {useState} from 'react'

function TodoForm() {
    const [newTask, setNewTask] = useState({text: "", date_to_complete: "", category: {name: ""}})


  return (
    <form>
        <p>
            <label htmlFor="todo">Todo</label>
            <input value={newTask.text} className="text-box" type="text"/>
        </p>
        <p>
            <label htmlFor="date-to-complete">Date to Complete</label>
            <input value={newTask.date_to_complete}type="date"/>
        </p>
        <p>
            <label htmlFor="category">Choose Category</label>
            <select value={newTask.category.name} name="category" id="category">
                <option value="none" >Select an Option</option>
                <option value="Chores">Chores</option>
                <option value="Work">Work</option>
                <option value="Fun">Fun</option>
                <option value="Family">Family</option>
                <option value="Important">Important</option>
            </select>
        </p>
        <input type="submit" value="Submit"/>
    </form>
  )
}

export default TodoForm