const TaskForm = ({ addTask, handleTaskChange, handleDescriptionChange, newTask, selectedDescription, newDescription, showListView }) => {
    return (
        <form id="addtask" onSubmit={addTask}>
            <div>
                <label>Task name:</label>
                <input 
                    onChange={handleTaskChange}
                    value={newTask}
                    id="taskname"/>
            </div>
            <div>
                <label>Description:</label>
                <textarea 
                    onChange={handleDescriptionChange}
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
  export default TaskForm