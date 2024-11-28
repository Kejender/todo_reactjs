const ListForm = ({ addToDoList, handleListChange, newName }) => {
    return (
        <form id="create_list" onSubmit={addToDoList}>
            <div>
                <label for="list_name">New ToDo list name:</label>
                <input 
                onChange={handleListChange}
                value={newName}
                id="list_name"
                aria-label="Enter todo list name"
                maxLength={60}
                />
            </div>
            <div>
                <button type="submit" className='actionbutton'>Add new ToDo list</button>
            </div>
        </form>
    )
  }
  
  export default ListForm