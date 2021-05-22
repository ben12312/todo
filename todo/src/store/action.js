export function createToDo(payload) {
    return { type: 'createTodo/todos', payload }
}

export function replaceTodo(payload) {
    return { type: 'replaceTodo/todos', payload }
}

export function deleteTodo(payload) {
    return { type: 'replaceRawTodo/RawTodos', payload }
}