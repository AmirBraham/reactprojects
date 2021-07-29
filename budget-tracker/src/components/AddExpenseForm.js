import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const [name, setName] = useState("some expense")
    const [cost, setCost] = useState("300")
    const { dispatch } = useContext(AppContext)
    console.log("state : ")
    console.log({ name: name, cost: cost })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_EXPENSE",
            payload: { name, cost, id: uuidv4() }
        })
        setName("")
        setCost("")

    }
    return <form onSubmit={handleSubmit}>
        <div className="col-sm">
            <div className="row">
                <label htmlFor="name">Name </label>
                <input onChange={(event) => setName(event.target.value)} required="required" type="text" className="form-control" id="name" value={name} />
            </div>
            <div className="row">
                <label htmlFor="cost">Cost</label>
                <input onChange={(event) => setCost(event.target.value)} required="required" type="text" className="form-control" id="cost" value={cost} />
            </div>
            <div className="row">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </div>

    </form >
}

export default AddExpenseForm