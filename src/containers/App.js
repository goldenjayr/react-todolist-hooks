import React, {useState, useRef} from 'react'

import Button from '../components/button/Button'
import Text from '../components/text/Text'
import TextField from '../components/text-field/TextField';


const App = () => {
    const [taskList, setTaskList] = useState([])
    const [doneTaskCount, setDoneTaskCount] = useState(0)
    const [editValue, setEditValue] = useState('')
    const [taskIdOnEdit, setTaskIdOnEdit] = useState(0)
    const inputEl = useRef()


    const addTaskHandler = (e) => {
        e.preventDefault()
        if(inputEl.current.value === '') return
        const newTask = {
            taskId: Date.now(),
            taskName: inputEl.current.value,
            isEdit:false
        }
        const newTaskList = [...taskList, newTask]
        setTaskList(newTaskList)
        inputEl.current.value = ''
    }

    const filterRemovedTask = (id) => {
        const newTaskList = taskList.filter(task => {
            return task.taskId !== id
        })
        return newTaskList
    }

    const deleteTaskHandler = (id) => {
        const newTaskList = filterRemovedTask(id)
        setTaskList(newTaskList)
    }

    const doneTaskHandler = (id) => {
        const newTaskList = filterRemovedTask(id)
        setTaskList(newTaskList)
        const newTaskCount = doneTaskCount + 1
        setDoneTaskCount(newTaskCount)
    }   

    const toggleEditFormHandler = (id) => {
        const isEditTaskSwitched = taskList.map(task => {
            if(task.taskId === id) task.isEdit = !task.isEdit
            return task
        })
        setTaskList(isEditTaskSwitched)
        setTaskIdOnEdit(id)
    }

    const onEditChangeHandler = (e) => {
        setEditValue(e.target.value)
    }

    const editTaskHandler = (e, id) => {
        e.preventDefault()
        const editedTasks = taskList.map(task => {
            if(task.taskId === id) {
                task.taskName = editValue
            }
            return task
        })
        setTaskList(editedTasks)
        setEditValue('')
        toggleEditFormHandler(id)
    }

    return(
        <div>
            <form onSubmit={addTaskHandler}>
                <TextField>
                    <input 
                    type="text" 
                    placeholder="Add a task" 
                    ref={inputEl}
                    />
                </TextField>            
                <Button 
                type="submit"
                className="btn-primary"
                >Add</Button>
            </form>
            <div>
                <ul>
                    {taskList.map(task => {
                        return (
                            <li key={task.taskId}>
                                <Text>{task.taskName}</Text>
                                <Button 
                                    onClick={() => toggleEditFormHandler(task.taskId)}
                                    className="btn-secondary"
                                >Edit</Button>
                                <Button
                                    onClick={() => doneTaskHandler(task.taskId)}
                                    className="btn-primary"
                                >Done</Button>
                                <Button
                                    onClick={() => deleteTaskHandler(task.taskId)}
                                    className="btn-danger"
                                >Delete</Button>
                                {task.isEdit === true && task.taskId === taskIdOnEdit &&
                                    <form onSubmit={(e) => editTaskHandler(e, task.taskId)}>
                                        <TextField>
                                            <input type="text" placeholder={task.taskName} value={editValue} onChange={onEditChangeHandler}/>
                                        </TextField>
                                        <Button 
                                        type="submit"
                                        className="btn-primary"
                                        >Save</Button>
                                    </form>
                                }
                            </li>
                        ) 
                    })}
                </ul>
            </div>
            <div>
                Acomplished Task: {doneTaskCount}
            </div>
        </div>
     )
}

export default App