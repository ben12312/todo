import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { replaceTodo, deleteTodo } from '../store/action';

export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const rawTodo = useSelector(state => state.rawTodo)

    function deleteButton() {
        let resultTodo = todos.filter(todo => todo.status === 'doing')
        let resultRow = rawTodo.filter(todo => todo.status === 'doing')
        dispatch(deleteTodo(resultRow))
        dispatch(replaceTodo(resultTodo))
    }

    function doneButton() {
        let doneTodo = todos.filter(todo => todo.status === 'done')
        dispatch(replaceTodo(doneTodo))
    }

    function showAll() {
        dispatch(replaceTodo(rawTodo))
    }

    useEffect(() => {
    }, [todos])

    if (todos === []) {
        return (
            <h3 style={{ color: 'wheat', textAlign: 'center', marginTop: '1cm' }}>No todo in list</h3>
        )
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Done</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(todo => {
                            return (
                                <tr>
                                    <td>{todo.title}</td>
                                    <td>{todo.status}</td>
                                    <th scope="row">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                onClick={() => { todo.status = 'done' }}
                                                checked={todo.status === 'done'}
                                            />
                                        </div>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={() => doneButton()} type="button" className="btn btn-secondary btn-sm">See Done Todo</button>
            <button onClick={() => showAll()} type="button" className="btn btn-secondary btn-sm" style={{ marginLeft: '2cm' }}>Show All Todo</button>
            <button onClick={() => deleteButton()} type="button" className="btn btn-danger btn-sm" style={{ marginLeft: '2cm' }}>Delete done Todo</button>
        </>
    )
}