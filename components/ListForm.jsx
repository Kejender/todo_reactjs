import { useState } from 'react'
import PropTypes from 'prop-types'

const ListForm = ({ addToDoList }) => {
    const [newName, setNewName] = useState('')

    const handleListChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
        console.log(newName)
    }

    const submitToDoList = (event) => {
        event.preventDefault()
        console.log("Submit to list:", newName)
        addToDoList(newName)
        setNewName('')
    }
  
    return (
        <form id="create_list" onSubmit={submitToDoList}>
            <div>
                <label htmlFor="list_name">New ToDo list name:</label>
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
  
  ListForm.displayName = 'ToDoListForm'

  ListForm.propTypes = {
    addToDoList: PropTypes.func,
  }

  export default ListForm