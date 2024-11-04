const RenameList = ({ handleListChange, newName, selectedList, renameList, showListView }) => {
    return (
        <form onSubmit={renameList} id="renamelist">
            <div>
                Name: <input 
                onChange={handleListChange}
                defaultValue={selectedList}
                id="name"
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
  
  export default RenameList