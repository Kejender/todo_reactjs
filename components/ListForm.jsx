const ListForm = ({ addToDoList, handleListChange, newName }) => {
    return (
        <form id="create_list" onSubmit={addToDoList}>
            <div>
                New ToDo list name: <input 
                onChange={handleListChange}
                value={newName}
                id="rename_list_field"
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