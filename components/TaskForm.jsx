import { useState } from 'react'
import PropTypes from 'prop-types'

const TaskForm = ({ addTask, showListView }) => {

  const [newTask, setNewTask] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const handleTaskChange = (event) => {
    console.log(event.target.value)
    setNewTask(event.target.value)
    console.log(newTask)
  }

  const handleDescriptionChange = (event) => {
    console.log(event.target.value)
    setNewDescription(event.target.value)
    console.log(newDescription)
  }

  const submitTask = (event) => {
    event.preventDefault()
    console.log("Submit to list:", newTask)
    addTask(newTask, newDescription)
    setNewTask('')
    setNewDescription('')
  }

    return (
        <form id="addtask" onSubmit={submitTask}>
            <div>
                <label htmlFor="taskname">Task name:</label>
                <input 
                    onChange={handleTaskChange}
                    value={newTask}
                    aria-label="Enter task name"
                    id="taskname"/>
            </div>
            <div>
                <label htmlFor="taskdescription">Description:</label>
                <textarea 
                    onChange={handleDescriptionChange}
                    aria-label="Enter task description"
                    value={newDescription}
                    id="taskdescription"/>
            </div>
            <div>
                <button type='submit' className='actionbutton'>Add task</button>
                <button onClick={showListView} className='actionbutton'>Cancel</button>
            </div>
        </form>
    )
  }
  // defaultValue={''}

  TaskForm.displayName = 'TaskEditForm'

  TaskForm.propTypes = {
    showListView: PropTypes.func
  }

  export default TaskForm