import PropTypes from 'prop-types'

const RenameList = ({ handleListNameChange, selectedList, renameList, showListView }) => {
    return (
        <form onSubmit={renameList} id="renamelist">
            <div>
            <label htmlFor="list_rename">New ToDo list name:</label>
                <input 
                onChange={handleListNameChange}
                defaultValue={selectedList}
                aria-label="Enter new list name"
                id="list_rename"
                maxLength={60}
                />
            </div>
            <div>
                <button type="submit" className='actionbutton'>Update</button>
                <button onClick={showListView} className='actionbutton'>Cancel</button>
            </div>
        </form>
    )
  }
  
  RenameList.displayName = 'RenameListForm'

  RenameList.propTypes = {
    selectedList: PropTypes.string.isRequired,
    handleListNameChange: PropTypes.func,
    renameList: PropTypes.func,
    showListView: PropTypes.func,
  }

  export default RenameList