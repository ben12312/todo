import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import Todo from '../components/TableTodo';
import { createToDo } from '../store/action';
import Swal from 'sweetalert2'

export default function Home() {
    const dispatch = useDispatch();
    // const [todo, setTodo] = useState('')
    const [input, setInput] = useState('')
    const todos = useSelector(state => state.todos)

    function createTodoButton() {
        const newTodo = {
            title: input,
            status: 'doing'
        }
        if (input === "") {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must fill the title'
            })
        }
        let counter = 0
        todos.forEach(todo => {
            if (todo.title.toLowerCase() === input.toLowerCase()) {
                counter++
            }
        })
        if (counter) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You can not input the same todo'
            })
        }
        dispatch(createToDo(newTodo))
    }

    function inputHandler(event) {
        setInput(event.target.value)
    }

    useEffect(() => {
    }, [todos])

    return (
        <>
            <h1 style={{ color: 'wheat', textAlign: 'center', marginTop: '1cm' }}>TODO</h1>
            <div className="container" style={{ marginBottom: '2cm' }}>
                <div className="card login-card" style={{ borderRadius: '25px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src="https://i.pinimg.com/originals/84/13/b0/8413b0dbed7daf395ab4a53c13652490.gif" style={{ borderRadius: '25px' }} className="login-card-img" />
                        </div>
                        <div className="col-md-6" style={{ marginLeft: '1cm' }}>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <h3 className="text-secondary">What you want to do?</h3>
                                        <input onChange={(event) => inputHandler(event)} type="text" className="form-control" placeholder="ex: running" />
                                    </div>
                                    <button onClick={() => { createTodoButton() }} type="button" style={{ marginTop: '0.5cm' }} className="btn btn-secondary btn-sm">Create Todo</button>
                                </form>
                                <hr style={{ height: '0.2cm', marginTop: '1cm', marginBottom: '1rem' }} />
                                <Todo></Todo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}