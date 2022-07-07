import {useState} from 'react'

function TodoForm({tasks, setTasks, currentUser}) {
    const [newTask, setNewTask] = useState({user_id: currentUser.id,text: "", date_to_complete: "", category: {name: ""}})
    const [showTodoForm, setShowTodoForm] = useState(true)

    console.log(tasks)
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/tasks', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(newTask)
        })
        .then(resp => resp.json())
        .then(newTask => {

            setTasks([newTask, ...tasks])})
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
      <div>
        {showTodoForm ?
        <button
            onClick={(e) => {setShowTodoForm(!showTodoForm)}}
            style={{marginRight: '700px'}}
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
        Close ToDo Form
        </button>
        : 
        <button
            onClick={(e) => {setShowTodoForm(!showTodoForm)}}
            style={{marginRight: '700px'}}
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
        Open ToDo Form
    </button>
        }
        {showTodoForm ? (
        <form className="form-todo" onSubmit={handleSubmit}>
            <div className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                    <label 
                        htmlFor="todo" 
                        className="block text-sm font-medium text-gray-700"
                        style={{marginRight: '300px'}}
                        >
                    Add your ToDo
                    </label>
                    <div className="mt-1">
                        <textarea
                            style={{width: '60%', marginLeft: '175px', border: '1px solid'}}
                            onChange={handleTextChange}
                            rows={4}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={''}
                            value={newTask.text}
                        />
                    </div>
                </div>
            </div>
            <br></br>
            <div className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                <label style={{marginRight: '25px'}} htmlFor="date-to-complete">Date to Complete:</label>
                <input style={{marginLeft: '0px', border: '1.5px solid', borderStyle: 'outset'}} onChange={handleDateChange} value={newTask.date_to_complete} type="date"/>
            </div>
            <br></br>
            <div className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                <label style={{marginRight: '20px'}} htmlFor="category">Choose Category:</label>
                <select 
                    onChange={handleSelectChange} 
                    value={newTask.category.name} 
                    name="category" 
                    id="category"
                    style={{marginLeft: '0px', border: '1.5px solid', borderStyle: 'outset'}}
                    >
                        <option value="none" >Select an Option</option>
                        <option value="Chores">Chores</option>
                        <option value="Work">Work</option>
                        <option value="Fun">Fun</option>
                        <option value="Family">Family</option>
                        <option value="SUPER IMPORTANT!!!!!">Important</option>
                </select>
            </div>
            <br></br>
            <button
                type="submit" 
                value="Submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
        </form> )
        :
        null }
    </div>
  )
}

export default TodoForm