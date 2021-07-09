import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { replaceTodo, deleteTodo } from '../store/action';
import { Button, Table, Flex, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

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
            <Table>
                <Thead>
                    <Tr>
                        <Th scope="col">Title</Th>
                        <Th scope="col">Status</Th>
                        <Th scope="col">Done</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        todos?.map(todo => {
                            return (
                                <Tr>
                                    <Td>{todo.title}</Td>
                                    <Td>{todo.status}</Td>
                                    <Td scope="row">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                onClick={() => { todo.status = 'done' }}
                                                checked={todo.status === 'done'}
                                            />
                                        </div>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
            <Flex marginTop="2cm">
                <Button onClick={() => doneButton()} colorScheme="teal" size="sm">See Done Todo</Button>
                <Button onClick={() => showAll()} colorScheme="teal" size="sm" marginLeft="1cm">Show All Todo</Button>
                <Button onClick={() => deleteButton()} colorScheme="red" size="sm" marginLeft="1cm">Delete done Todo</Button>
            </Flex>
        </>
    )
}