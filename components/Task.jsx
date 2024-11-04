const Task = ({ task, editTask }) => {
    return (
      <button id={task.id} className="task visible_task" onClick={() => editTask(task)} value={task.name} >{task.name}</button>
    )
  }
  export default Task