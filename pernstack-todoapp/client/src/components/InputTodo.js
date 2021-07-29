import React, { useState } from "react"
const InputTodo = () => {
    const [description, setDescription] = useState("f")
    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/"
        } catch (error) {
            console.error(error)
        }
    }
    return <>
        <h1 className="text-center mt-5">Pern todo list</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
            <input onChange={e => setDescription(e.target.value)} type="text" className="form-control" value={description} />
            <button className="btn btn-success">Add</button>
        </form>
    </>
}

export default InputTodo