import PropTypes from 'prop-types'
import { useState } from 'react'

const TaskEditForm = ({ selectedDescription, returnTaskView, updateTask, changeStatus}) => {

    const [newDescription, setNewDescription] = useState([]) 

    const handleDescriptionUpdate = (event) => {
        console.log(event.target.value)
        setNewDescription(event.target.value)
        console.log("descr "+selectedDescription)
      }

      const submitUpdatedDescription = (event) => {
        event.preventDefault()
        console.log("Submit to list:", newDescription)
        updateTask(newDescription)
        //setSelectedList('')
    }

    return (
        <form onSubmit={submitUpdatedDescription}>
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
    returnTaskView: PropTypes.func,
    updateTask: PropTypes.func,
    changeStatus: PropTypes.func
  }

  export default TaskEditForm