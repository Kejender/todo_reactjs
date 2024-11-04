const ToDoList = ({ todo, showTaskView }) => {
    return (
      <button onClick={() => showTaskView(todo)} className='todo' value={todo.name}>{todo.name}</button>
    )
  }
  
  export default ToDoList