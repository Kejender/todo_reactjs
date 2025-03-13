import { useState, useEffect } from 'react'
import ToDoList from '../components/ToDoList'
import Task from '../components/Task'
import ListForm from '../components/ListForm'
import TaskForm from '../components/TaskForm'
import TaskEditForm from '../components/TaskEditForm'
import ListEditForm from '../components/RenameList'
import ErrorMessage from '../components/ErrorMessage'

const App = () => {

  // array of list objects and included tasks
  const [todolists, setToDoLists] = useState([])
  
  console.log("rerendered", todolists)

  // helper states
  const [storeChecked, setStoreStatus] = useState(false)  
  const [updatedName, setUpdatedName] = useState('')
  const [newTask, setNewTask] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [selectedList, setSelectedList] = useState([])
  const [selectedListId, setSelectedListId] = useState('')
  const [selectedTasks, setSelectedTasks] = useState([])
  const [selectedTask, setSelectedTask] = useState([])
  const [selectedTaskId, setSelectedTaskId] = useState([])
  const [selectedDescription, setSelectedDescription] = useState([]) 
  const [errorMessage, setErrorMessage] = useState(null) 

  // Selecting component groups for showing and hiding
  let list_view_visibility = document.getElementById('listview');
  let task_view_visibility = document.getElementById('taskview');
  let task_edit_visibility = document.getElementById('taskedit');
  let list_edit_visibility = document.getElementById('listedit');

  // form selections
  let addtaskform = document.getElementById("addtask");
  let renamelistform = document.getElementById("renamelist");

  // local storage initializing, saving to localStorage

    useEffect(() => {
      if (todolists.lenghth == 0) {
        console.log("mounted, empty array")
        let newToDoObject = localStorage.getItem('ToDoLists');
        if (newToDoObject) {
          console.log("newtodoobject")
          setToDoLists(JSON.parse(newToDoObject));
        }
      } else {
        console.log("set localstorage")
        localStorage.setItem('ToDoLists', JSON.stringify(todolists));
      }
    }, [todolists]);

  // storing the selected todo list, showing and hiding component groups
  const showTaskView = (todo) => {
    //console.log("show task view "+event.target.value)
    setSelectedList(todo.name)
    setSelectedListId(todo.id)
    console.log(selectedListId)
    console.log(todo.id)
    console.log(selectedList)
    console.log(todo.name)

    // initializing the filter buttons
    const statusfilterbuttons = document.getElementsByClassName("statusfilterbutton")
    const selectedbuttons = document.getElementsByClassName("selectedfilter")

    // removing class selectedfilter from filterbuttons 
    Array.from(selectedbuttons).forEach(el => {
      el.classList.remove("selectedfilter")
    })

    // adding class selectedfilter to filterbutton "all"
    Array.from(statusfilterbuttons).forEach(el => {
      if (el.value === 'all') {
        console.log('yes')
        el.classList.add("selectedfilter")
      }
    })

    todolists.forEach(list => {
      if (list.name === todo.name){
        setSelectedTasks(list.tasks)
        console.log("selected tasks")
        console.log(selectedTasks)
      }
      else{
        console.log("wrong list")
      }
    })

    list_view_visibility.classList.replace("visible", "hidden")
    task_view_visibility.classList.replace("hidden", "visible")
    task_edit_visibility.classList.replace("visible", "hidden")
  }

  // Showing and hiding component groups
  const showListView = (event) => {
    console.log("show list view")
    event.preventDefault()
    list_view_visibility.classList.replace("hidden", "visible")
    task_view_visibility.classList.replace("visible", "hidden")
    task_edit_visibility.classList.replace("visible", "hidden")
    list_edit_visibility.classList.replace("visible", "hidden")
    console.log(todolists)
  }

  // Showing and hiding component groups
  const returnTaskView = (event) => {
    console.log("show task view")
    event.preventDefault()
    list_view_visibility.classList.replace("visible", "hidden")
    task_view_visibility.classList.replace("hidden", "visible")
    task_edit_visibility.classList.replace("visible", "hidden")
    console.log(todolists)
  }

  // opening a task for editing
  const editTask = (task) => {
    console.log("edit task")
    setSelectedTask(task.name)
    setSelectedTaskId(task.id)
    setSelectedDescription(task.description)
    console.log(task.description)
    console.log(selectedTask)
    console.log("status:", task.status)

    const statusbuttons = document.getElementsByClassName("statusbutton")
    const selectedbuttons = document.getElementsByClassName("selected_status")

    Array.from(selectedbuttons).forEach(el => {
      el.classList.remove("selected_status")
    })

    Array.from(statusbuttons).forEach(el => {
      if (el.value === task.status) {
        console.log('yes '+ task.status)
        el.classList.add("selected_status")
      }
    })

    selectedTasks.forEach(task => {
      if (task.id === selectedTaskId){
        console.log("yes id")
        //list.tasks.push(taskObject)
        //setSelectedTasks(list.tasks)
      }
      else{
        console.log("no")
      }
    })

    //list_view_visibility.classList.replace("hidden", "visible")
    task_edit_visibility.classList.replace("hidden", "visible")
    task_view_visibility.classList.replace("visible", "hidden")
  }

  // Updating task details
  const updateTask = (event) => {
    event.preventDefault()
    console.log("update task")
    console.log(selectedList)
    console.log(selectedTask)
    console.log(selectedDescription)

    selectedTasks.forEach(task => {
      if (task.id === selectedTaskId){
        console.log("id found")
        task.description = selectedDescription
        task.status = newStatus
        console.log(task)
        //list.tasks.push(taskObject)
        //setSelectedTasks(list.tasks)
      }
      else{
        console.log("wrong task")
      }
    })

    todolists.forEach(list => {
      if (list.id === selectedListId){
        console.log("yes list id")
        list.tasks = selectedTasks
        localStorage.setItem("ToDoLists", JSON.stringify(todolists));

        //task.description = newDescription
        //task.status = newStatus
        //console.log(task)
        //list.tasks.push(taskObject)
        //setSelectedTasks(list.tasks)
      }
      else{
        console.log("no list id")
      }
    })
    console.log("updated lists")
    console.log(todolists)
  }

  // Change the status of the task
  const changeStatus = (event) => {
    event.preventDefault()
    console.log("status button")
    console.log(event.target.value)
    const selected_statuses = document.getElementsByClassName("selected_status")

    console.log(selected_statuses)
    Array.from(selected_statuses).forEach(el => {
      el.classList.remove("selected_status")
    })
    
    event.target.classList.add("selected_status")
    setNewStatus(event.target.value)
  }

  // handling form field changes
  const handleTaskChange = (event) => {
    console.log(event.target.value)
    setNewTask(event.target.value)
    console.log(newTask)
  }

  // handling form field changes
  const handleDescriptionChange = (event) => {
    console.log(event.target.value)
    setNewDescription(event.target.value)
    console.log(newDescription)
  }

  // handling form field changes
  const handleDescriptionUpdate = (event) => {
    console.log(event.target.value)
    setSelectedDescription(event.target.value)
    console.log("descr "+selectedDescription)
  }

  // handling form field changes
  const handleListNameChange = (event) => {
    console.log(event.target.value)
    setUpdatedName(event.target.value)
    console.log(updatedName)
  }

  // adding a new todo list
  const addToDoList = (newName) => {
    console.log("add to list:", newName)
    console.log("List of todo lists length:", todolists.length)

    if (newName.length > 1) {
      console.log("Good list name length")

      let duplicate_name = false

      todolists.forEach(list => {
        if (list.name === newName){
          console.log("duplicate name")
          setErrorMessage('The same name exists')
          setTimeout(() => {
            setErrorMessage(null)
          }, 4000)
          duplicate_name = true
        }
      })

      if (!duplicate_name || todolists.length === 0) {
        console.log("good list name")
        const todoListObject = {
          name: newName,
          id: Math.floor(Math.random(5) * (10000 - 1000)),
          tasks: []
      }
        console.log("new object:", todoListObject)
        setToDoLists(todolists.concat(todoListObject))
        console.log(todolists)

        //localStorage.setItem("ToDoLists", JSON.stringify(todolists));
      }
  }
  else {
    console.log("too short list name length")
    setErrorMessage('Too short list name')
    setTimeout(() => {
      setErrorMessage(null)
    }, 4000)
  }
    //setNewName('')
    console.log(todolists)
  }

  // adding a new task when submitting the form
  const addTask = (event) => {
    console.log("addtask "+selectedList)
    event.preventDefault()

    if (newTask.length > 1) {
      console.log("Good task name length")

      const taskObject = {
        name: newTask,
        description: newDescription,
        id: Math.floor(Math.random(5) * (10000 - 1000)),
        status: "todo"
      }
  
      //setTasks(tasks.concat(taskObject))

      // finding the correct list for adding the task to
      todolists.forEach(list => {
        if (list.name === selectedList){
          console.log("list found", list.name, list.id, list.tasks)
          list.tasks.push(taskObject)
          setSelectedTasks(list.tasks)
        }
        else {
          console.log("wrong list "+selectedList)
        }
      })
      localStorage.setItem("ToDoLists", JSON.stringify(todolists));
    }
    else {
      console.log("Too short task name length")
      setErrorMessage('Too short task name')
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)
    }
    //console.log("task list "+tasks)
    addtaskform.reset()

    console.log("todo lists", todolists)
    setNewTask('')
    setNewDescription('')
    console.log("addtask ends")

  }

  // Deleting a task
  const deleteTask = (event) => {
    console.log("delete task")
    event.preventDefault()

    selectedTasks.forEach(task => {
      if (task.id === selectedTaskId){
        console.log("yes id")
        console.log(task)
        let deleteindex = selectedTasks.indexOf(task)
        selectedTasks.splice(deleteindex, 1)
        
        console.log(selectedTasks)
      }
      else{
        console.log("task not found")
      }
    })

    setSelectedTask('')

    list_view_visibility.classList.replace("visible", "hidden")
    task_view_visibility.classList.replace("hidden", "visible")
    task_edit_visibility.classList.replace("visible", "hidden")
  }

  // renaming the todo list
  const openListEdit = (event) => {
    console.log("edit list")
    event.preventDefault()

    todolists.forEach(list => {
      if (list.id === selectedListId){
        console.log("yes id")
        console.log(list)
        setNewName(list.name)
        //localStorage.setItem("ToDoLists", JSON.stringify(todolists));
        list_view_visibility.classList.replace("visible", "hidden")
        task_view_visibility.classList.replace("visible", "hidden")
        task_edit_visibility.classList.replace("visible", "hidden")
        list_edit_visibility.classList.replace("hidden", "visible")
      }
      else{
        console.log("list not found")
      }
    })
    //showListView()
  }

  // deleting a todo list
  const deleteList = (event) => {
    console.log("delete list")
    //event.preventDefault()

    todolists.forEach(list => {
      console.log(list.id)
      if (list.id === selectedListId){
        console.log("yes id")
        console.log(list)
        let deleteindex = todolists.indexOf(list)
        todolists.splice(deleteindex, 1)
        console.log(deleteindex)
        console.log(todolists)
        setSelectedList('')
      }
      else{
        console.log("list not found")
      }
    })
    console.log("lists")
    console.log(todolists)
    //localStorage.setItem("ToDoLists", JSON.stringify(todolists));
    showListView()
  }

  // renaming a todo list
  const renameList = (event) => {
    event.preventDefault()
    console.log("new name: " + updatedName)
    console.log("name to be updated: " +selectedList)

    let list_exists = false
    let list_rename 

    todolists.forEach(list => {
      console.log("current name:", list.name)
      console.log("current id: ", list.id)
      console.log("new name:", updatedName)
      console.log("selected list id: ", selectedListId)

      // checks if the given new name exists, excluding the list item being updated
      if (list.name === updatedName && list.id != selectedListId){
        console.log("same name exists "+ list.name + " " + updatedName)
        setErrorMessage('The same name exists')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNewName('')
        list_exists = true
      }

      // list item with the selected id is stored for updating
      if (list.id === selectedListId) {
        console.log(todolists)
        list_rename = list
      }
    })

    // if the new name does not exist in the list, excluding the selected list item, the selected list item is updated
    if (!list_exists) {
      setSelectedList(updatedName)
      setNewName('')
      renamelistform.reset()
      addtaskform.reset()
      list_rename.name = updatedName
      localStorage.setItem("ToDoLists", JSON.stringify(todolists));
      setSelectedList('')
      setSelectedListId('')
    }

    list_view_visibility.classList.replace("hidden", "visible")
    task_view_visibility.classList.replace("visible", "hidden")
    task_edit_visibility.classList.replace("visible", "hidden")
    list_edit_visibility.classList.replace("visible", "hidden")
  }

  // filtering the list of tasks
  const filterTasks = (event) => {
    console.log("filterstatus ")

    const selectedfilterbuttons = document.getElementsByClassName("selectedfilter")

    Array.from(selectedfilterbuttons).forEach(el => {
      el.classList.remove("selectedfilter")
    })

    event.preventDefault()
event.target.classList.add('selectedfilter')
    
    const all_tasks = document.getElementsByClassName("task")

    if (event.target.value === 'all') {
      console.log('show all tasks')

      Array.from(all_tasks).forEach(el => {
        console.log(el.value)
        el.classList.replace("hidden_task", "visible_task")
      })
    }
    else {
      Array.from(all_tasks).forEach(el => {
        console.log(el.value)
        el.classList.replace("visible_task", "hidden_task")
      })
      selectedTasks.forEach(task => {
        console.log("button value "+ event.target.value)
        console.log("task status "+ task.status)
        if (task.status === event.target.value){
          console.log("status found")
          let selectedtask = document.getElementById(task.id);
          selectedtask.classList.replace("hidden_task", "visible_task")
        }
      })
    }
  }

  return (
    <div>
      <div id='listview' className='visible'>
      <h2>Todo Lists</h2>
        {todolists.map(todo => <ToDoList key={todo.id} todo={todo} showTaskView={showTaskView} setSelectedList={setSelectedList}/>)}
        <ListForm addToDoList={addToDoList}/>
      </div>

      <div id='taskview' className='hidden'>
        <h2>{selectedList}</h2>
        <div>
          <button onClick={openListEdit} className='actionbutton'>Rename this ToDo list</button>
          <button onClick={deleteList} className='actionbutton'>Delete this ToDo list</button>
        </div>
        <div>
          <h3>Filter by status</h3>
          <button onClick={filterTasks} className='statusfilterbutton' value="all">All</button>
          <button onClick={filterTasks} className='statusfilterbutton' value="todo">ToDo</button>
          <button onClick={filterTasks} className='statusfilterbutton' value="doing">Doing</button>
          <button onClick={filterTasks} className='statusfilterbutton' value="done">Done</button>
        </div>
        {selectedTasks.map(task => <Task key={task.id} task={task} editTask={editTask}/>)}
        <TaskForm addTask={addTask} handleTaskChange={handleTaskChange} handleDescriptionChange={handleDescriptionChange} newTask={newTask} 
        showListView={showListView}/>
     </div>
     <div id='taskedit' className='hidden'>
        <h2>{selectedTask}</h2>
        <button onClick={deleteTask} className='actionbutton'>Delete this task</button>
        <TaskEditForm handleDescriptionUpdate={handleDescriptionUpdate} selectedDescription={selectedDescription}  
        returnTaskView={returnTaskView} selectedList={selectedList} selectedTask={selectedTask} updateTask={updateTask} changeStatus={changeStatus}/>
     </div>

     <div id='listedit' className='hidden'>
     <h2>Rename list</h2>
        <ListEditForm handleListNameChange={handleListNameChange} showListView={showListView} selectedList={selectedList} renameList={renameList}/>
     </div>
     <ErrorMessage errorMessage={errorMessage}/>
    </div>
  )
}

export default App
