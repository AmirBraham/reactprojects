import React, { useEffect, useState } from "react"
import EditTodo from './EditTodo'
const ListTodos = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const deleteTodo = async (id) => {
        console.log(`http://localhost:5000/todos/${id}`)
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            console.log(deleteTodo)
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])
    console.log(todos)
    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><EditTodo todo_description={todo.description} todo_id={todo.todo_id} />
                    </td>
                    <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}> Delete</button> </td>
                </tr>)}


            </tbody>
        </table>
    </>
}
export default ListTodos