import { useState } from 'react'
import ToDoList from '../components/ToDoList'
import Task from '../components/Task'
import ListForm from '../components/ListForm'
import TaskForm from '../components/TaskForm'
import TaskEditForm from '../components/TaskEditForm'
import ListEditForm from '../components/RenameList'

const App = () => {

  // States
  const [todolists, setToDoLists] = useState([
    { name: 'Lista 1', id: 0, tasks: []}
  ]) 

  const [storeChecked, setStoreStatus] = useState(false)  
  const [newName, setNewName] = useState('')
  const [newTask, setNewTask] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [selectedList, setSelectedList] = useState([])
  const [selectedListId, setSelectedListId] = useState('')
  const [selectedTasks, setSelectedTasks] = useState([])
  const [selectedTask, setSelectedTask] = useState([])
  const [selectedTaskId, setSelectedTaskId] = useState([])
  const [selectedDescription, setSelectedDescription] = useState([]) 

  // Selecting component groups for showing and hiding
  let list_view_visibility = document.getElementById('listview');
  let task_view_visibility = document.getElementById('taskview');
  let task_edit_visibility = document.getElementById('taskedit');
  let list_edit_visibility = document.getElementById('listedit');

  let addtaskform = document.getElementById("addtask");
  let renamelistform = document.getElementById("renamelist");

  if (!storeChecked){
    if (localStorage.getItem("ToDoLists")) {
      console.log("store is available")
      let newToDoObject = localStorage.getItem("ToDoLists");
      console.log(JSON.parse(newToDoObject));
      setStoreStatus(true)
      //setToDoLists(JSON.parse(newToDoObject))
    } else {
      console.log("store is NOT available")
    }
  }

//  localStorage.setItem("ToDoLists", JSON.stringify(todolists));
//  let newToDoObject = localStorage.getItem("ToDoLists");
//  console.log(JSON.parse(newToDoObject));

  // storing the selected todo list, showing and hiding component groups
  const showTaskView = (todo) => {
    //console.log("show task view "+event.target.value)
    setSelectedList(todo.name)
    setSelectedListId(todo.id)
    console.log(selectedListId)
    console.log(todo.id)
    console.log(selectedList)
    console.log(todo.name)

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
    //event.preventDefault()
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
    console.log("status")
    console.log(task.status)

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
        console.log("no")
      }
    })

    todolists.forEach(list => {
      if (list.id === selectedListId){
        console.log("yes list id")
        list.tasks = selectedTasks

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
  const handleListChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    console.log(newName)
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
    //selectedList(event.target.value)
    //console.log("descr "+newListName)
  }

  // adding a new todo list
  const addToDoList = (event) => {
    console.log("add list")
    event.preventDefault()

    if (newName.length > 1) {
      console.log("Good list name length")

      let duplicate_name = false

      todolists.forEach(list => {
        if (list.name === newName){
          console.log("duplicate name")
          duplicate_name = true
        }
      })

      if (!duplicate_name) {
        const todoListObject = {
        name: newName,
        id: Math.floor(Math.random(5) * (10000 - 1000)),
        tasks: []
      }
  
        setToDoLists(todolists.concat(todoListObject))
        console.log(todolists)

        localStorage.setItem("ToDoLists", JSON.stringify(todolists));
        let newToDoObject = localStorage.getItem("ToDoLists");
        console.log("added to localstorage")
        console.log(JSON.parse(newToDoObject));
      }
  }
  else {
    console.log("too short list name length")
  }
    setNewName('')
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
          console.log("yes"+list.name+list.id+list.tasks)
          list.tasks.push(taskObject)
          setSelectedTasks(list.tasks)
        }
        else {
          console.log("wrong list "+selectedList)
        }
      })

      localStorage.setItem("ToDoLists", JSON.stringify(todolists));
      let newToDoObject = localStorage.getItem("ToDoLists");
      console.log("localstorage")
      console.log(JSON.parse(newToDoObject));

    }
    else {
      console.log("Too short task name length")
    }

    //console.log("task list "+tasks)
    addtaskform.reset()

    console.log("todo lists")
    console.log(todolists)
    setNewTask('')
    setNewDescription('')
    console.log(newDescription)
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

  const openListEdit = (event) => {
    console.log("edit list")
    event.preventDefault()

    todolists.forEach(list => {
      if (list.id === selectedListId){
        console.log("yes id")
        console.log(list)
        setNewName(list.name)
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
        let deleteindex = selectedTasks.indexOf(list)
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
    showListView()
  }

  // renaming a todo list
  const renameList = (event) => {
    console.log("renamelist ")
    console.log(todolists)
    event.preventDefault()

    todolists.forEach(list => {
      console.log("current "+list.name)
      console.log("current "+list.id)
      console.log("new name "+newName)
      console.log("selected "+selectedListId)

      if (list.name === newName && list.id != selectedListId){
        console.log("same name exists")
      }
      else if (list.id === selectedListId) {
        console.log("Different name, correct id"+list.name)
        list.name = newName
        console.log(todolists)
        setNewName('')
        setSelectedList('')
        setSelectedListId('')
        renamelistform.reset()
      }
    })
    list_view_visibility.classList.replace("hidden", "visible")
    task_view_visibility.classList.replace("visible", "hidden")
    task_edit_visibility.classList.replace("visible", "hidden")
    list_edit_visibility.classList.replace("visible", "hidden")
  }

  // filtering the list of tasks
  const filterTasks = (event) => {
    console.log("filterstatus ")
    event.preventDefault()
    
    const all_tasks = document.getElementsByClassName("task")

    if (event.target.value === 'all_status') {
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
          console.log("joo status")
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
        <ListForm addToDoList={addToDoList} handleListChange={handleListChange} newName={newName}/>
      </div>

      <div id='taskview' className='hidden'>
        <h2>{selectedList}</h2>
        <div>
          <button onClick={openListEdit} className='actionbutton'>Rename this ToDo list</button>
          <button onClick={deleteList} className='actionbutton'>Delete this ToDo list</button>
        </div>
        <div>
          <h3>Filter by status</h3>
          <button onClick={filterTasks} className='statusfilterbutton' value="all_status">All</button>
          <button onClick={filterTasks} className='statusfilterbutton' value="todo_status">ToDo</button>
          <button onClick={filterTasks} className='statusfilterbutton' value="doing_status">Doing</button>
          <button onClick={filterTasks} className='statusfilterbutton' value="done_status">Done</button>
        </div>
        {selectedTasks.map(task => <Task key={task.id} task={task} editTask={editTask}/>)}
        <TaskForm addTask={addTask} handleTaskChange={handleTaskChange} handleDescriptionChange={handleDescriptionChange} newTask={newTask} 
        showListView={showListView} setNewDescription={setNewDescription}/>
     </div>

     <div id='taskedit' className='hidden'>
        <h2>{selectedTask}</h2>
        <button onClick={deleteTask} className='actionbutton'>Delete this task</button>
        <TaskEditForm handleDescriptionUpdate={handleDescriptionUpdate} selectedDescription={selectedDescription}  
        returnTaskView={returnTaskView} selectedList={selectedList} selectedTask={selectedTask} updateTask={updateTask} changeStatus={changeStatus}/>
     </div>

     <div id='listedit' className='hidden'>
     <h2>Rename list</h2>
        <ListEditForm handleListChange={handleListChange} showListView={showListView} selectedList={selectedList} renameList={renameList}/>
     </div>

    </div>
  )
}

export default App