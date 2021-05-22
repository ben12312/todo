const initialState = {
    todos: [],
    rawTodo: []
}

export default function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case 'createTodo/todos':
            // return { ...state, todos: action.payload }
            return {
                todos: [...state.todos, action.payload],
                rawTodo: [...state.todos, action.payload]
            }
        case 'replaceTodo/todos':
            return { ...state, todos: action.payload }
        case 'replaceRawTodo/RawTodos':
            return { ...state, rawTodo: action.payload }
        default:
            return state
    }
}