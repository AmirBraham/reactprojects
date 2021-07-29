import React, { useState } from "react"

const EditTodo = ({ todo_id, todo_description }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [description, setDescription] = useState(todo_description)
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const body = { description }
        const response = await fetch(`http://localhost:5000/todos/${todo_id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        window.location = "/"
    }
    return <>

        {isEditing ? <form className="form" onSubmit={handleOnSubmit}>
            <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="btn btn-secondary" type="submit">Apply</button>
            <button className="btn btn-danger" type="submit" onClick={() => {
                setDescription(todo_description)
                setIsEditing(false)
            }}>X</button>

        </form> : <button type="button" className="btn btn-primary" onClick={() => setIsEditing(prev => !prev)}>
            Open modal
        </button>}

    </>
}

export default EditTodo