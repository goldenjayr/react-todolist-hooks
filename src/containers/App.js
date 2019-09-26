import React, {useState, useRef} from 'react'

import Button from '../components/button/Button'


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
            if(task.taskId === id) task.isEdit = true
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
            if(task.taskId === id) task.taskName = editValue
            return task
        })
        setTaskList(editedTasks)
        setEditValue('')
        toggleEditFormHandler(id)
    }

    return(
        <div>
            <form onSubmit={addTaskHandler}>
                <input 
                type="text" 
                placeholder="Add a task" 
                ref={inputEl}
                />
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
                                {task.taskName}
                                <button 
                                    onClick={() => toggleEditFormHandler(task.taskId)}
                                >Edit</button>
                                <button
                                    onClick={() => doneTaskHandler(task.taskId)}
                                >Done</button>
                                <button
                                    onClick={() => deleteTaskHandler(task.taskId)}
                                >Delete</button>
                                {task.isEdit === true && task.taskId === taskIdOnEdit &&
                                    <form onSubmit={(e) => editTaskHandler(e, task.taskId)}>
                                        <input type="text" placeholder={task.taskName} value={editValue} onChange={onEditChangeHandler}/>
                                        <button type="submit">Save</button>
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