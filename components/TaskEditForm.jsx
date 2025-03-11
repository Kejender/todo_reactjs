import PropTypes from 'prop-types'

const TaskEditForm = ({ handleDescriptionUpdate, selectedDescription, returnTaskView, updateTask, changeStatus}) => {
    return (
        <form onSubmit={updateTask}>
            <div>
                <button onClick={changeStatus} id="todobutton" aria-label="Set task status to todo" className="statusbutton" value={"todo"}>Todo</button>
                <button onClick={changeStatus} id="doingbutton" aria-label="Set task status to doing" className="statusbutton" value={"doing"}>Doing</button>
                <button onClick={changeStatus} id="donebutton" aria-label="Set task status to done" className="statusbutton" value={"done"}>Done</button>
            </div>
            <div>
                Description: <textarea 
                onChange={handleDescriptionUpdate}
                defaultValue={selectedDescription}
                aria-label="Enter task description"
                id="taskdescriptionupdate"/>
            </div>
            <div>
                <button type="submit" className='actionbutton'>Update</button>
                <button onClick={returnTaskView} className='actionbutton'>Cancel</button>
            </div>
        </form>
    )
  }
  //  onSubmit={updateTask}

  TaskEditForm.displayName = 'TaskEditForm'

  TaskEditForm.propTypes = {
    selectedDescription: PropTypes.string.isRequired,
    handleDescriptionUpdate: PropTypes.func,
    returnTaskView: PropTypes.func,
    updateTask: PropTypes.func,
    changeStatus: PropTypes.func
  }

  export default TaskEditForm