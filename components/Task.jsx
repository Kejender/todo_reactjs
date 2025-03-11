import PropTypes from 'prop-types'

const Task = ({ task, editTask }) => {
    return (
      <button id={task.id} className="task visible_task" onClick={() => editTask(task)} value={task.name} >{task.name}</button>
    )
  }

  Task.displayName = 'TaskButton'

  Task.propTypes = {
    task: PropTypes.object.isRequired,
    editTask: PropTypes.func,
  }

  export default Task