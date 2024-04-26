import { useReducer, useState } from 'react';
import './Todo.scss'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import TodoReducer from './TodoReducer';


const Todo = () => {
    const [text, setText] = useState('')
    const [tasks, dispatch] = useReducer(TodoReducer, {
        name: 'Todos',
        tasks: [{
            text: 'Read book',
            id: 129301,
            status: false,
        }]
    })


    const addTask = () => {
        dispatch({
            type: 'addTask',
            text: text
        })
        setText('')
    }
    const removeTask = (id) => {
        dispatch({ type: 'removeTask', id: id })
    }
    const statusTask = (status, id) => {
        dispatch({ type: 'status', status: status, id: id })
    }


    return (
        <div className='Todo'>
            <div className="container">
                <div className="Todo-block">
                    <div className="Todo-block-navi">
                        <TextField id="outlined-basic" label="Tasks" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
                        <Button variant="contained" onClick={() => addTask()}>Add Task</Button>
                    </div>
                    <div className="Todo-block-list">
                        <ul>
                            {
                                tasks?.tasks.map((task) => (
                                    <li key={task.id} id={task.id}>
                                        <input type="checkbox" onChange={(e) => statusTask(e.target.checked, task.id)} />
                                        <p style={{ textDecoration: task.status ? 'line-through' : 'none' }}>{task.text}</p>
                                        <button onClick={() => removeTask(task.id)}>X</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;