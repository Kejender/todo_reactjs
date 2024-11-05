const TaskEditForm = ({ handleDescriptionUpdate, selectedDescription, returnTaskView, updateTask, changeStatus}) => {
    return (
        <form onSubmit={updateTask}>
            <div>
                <button onClick={changeStatus} id="todobutton" className="statusbutton" value={"todo"}>Todo</button>
                <button onClick={changeStatus} id="doingbutton" className="statusbutton" value={"doing"}>Doing</button>
                <button onClick={changeStatus} id="donebutton" className="statusbutton" value={"done"}>Done</button>
            </div>
            <div>
                Description: <textarea 
                onChange={handleDescriptionUpdate}
                defaultValue={selectedDescription}
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
  export default TaskEditForm