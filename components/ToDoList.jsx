import PropTypes from 'prop-types'

const ToDoList = ({ todo, showTaskView }) => {
    return (
      <button onClick={() => showTaskView(todo)} className='todo' value={todo.name}>{todo.name}</button>
    )
  }
  
  ToDoList.displayName = 'ToDoListButton'

  ToDoList.propTypes = {
    todo: PropTypes.object.isRequired,
    showTaskView: PropTypes.func
  }

  export default ToDoList