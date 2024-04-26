const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'addTask':
            return {
                ...state,
                tasks: [...state.tasks, {
                    text: action.text,
                    id: Math.floor(Math.random() * 1000000),
                    status: false,
                }]
            }
        case 'removeTask':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id)
            }
        case 'status':
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.id ? { ...task, status: action.status } : task)
            }
    }
}


export default TodoReducer;