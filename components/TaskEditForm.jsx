const TaskEditForm = ({ handleDescriptionUpdate, selectedDescription, returnTaskView, selectedList, 
    selectedTask, updateTask, changeStatus}) => {
    return (
        <form onSubmit={updateTask}>
            <div>
                <button onClick={changeStatus} id="todobutton" className="statusbutton" value={"todo_status"}>Todo</button>
                <button onClick={changeStatus} id="doingbutton" className="statusbutton" value={"doing_status"}>Doing</button>
                <button onClick={changeStatus} id="donebutton" className="statusbutton" value={"done_status"}>Done</button>
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