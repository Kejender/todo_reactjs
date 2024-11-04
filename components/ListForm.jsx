const ListForm = ({ addToDoList, handleListChange, newName }) => {
    return (
        <form id="rename_list" onSubmit={addToDoList}>
            <div>
                Name: <input 
                onChange={handleListChange}
                value={newName}
                id="rename_list_field"
                maxLength={60}
                />
            </div>
            <div>
                <button type="submit" className='actionbutton'>Add</button>
            </div>
        </form>
    )
  }
  
  export default ListForm