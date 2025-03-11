import PropTypes from 'prop-types'

const TaskForm = ({ addTask, handleTaskChange, handleDescriptionChange, newTask, newDescription, showListView }) => {
    return (
        <form id="addtask" onSubmit={addTask}>
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
    newTask: PropTypes.string.isRequired,
    newDescription: PropTypes.string.isRequired,
    addTask: PropTypes.func,
    handleTaskChange: PropTypes.func,
    handleDescriptionChange: PropTypes.func,
    showListView: PropTypes.func
  }

  export default TaskForm