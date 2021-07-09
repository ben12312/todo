import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import Todo from '../components/TableTodo';
import { createToDo } from '../store/action';
import { Button, Input, Image, Text, Flex } from '@chakra-ui/react';
import Swal from 'sweetalert2';

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
            <Text color='wheat' textAlign='center' marginTop='1cm' fontSize='50px'>TODO</Text>
            <Flex className="container" marginBottom='2cm'>
                <Flex className="card login-card" borderRadius='25px'>
                    <Flex>
                        <div className="col-md-5">
                            <Image src="https://media2.giphy.com/media/eJpACEhRNsNeqzW9tQ/giphy.gif" borderRadius='25px' />
                        </div>
                        <div className="col-md-6" style={{ marginLeft: '1cm' }}>
                            <div className="card-body">
                                <div className="form-group">
                                    <Text fontSize='25px'>What you want to do?</Text>
                                    <Input onChange={(event) => inputHandler(event)} placeholder="ex: running" />
                                </div>
                                <Button onClick={() => { createTodoButton() }} colorScheme="teal" size="sm" marginTop="0.5cm">Create Todo</Button>
                                <hr style={{ height: '0.2cm', marginTop: '1cm', marginBottom: '1rem' }} />
                                <Todo></Todo>
                            </div>
                        </div>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}