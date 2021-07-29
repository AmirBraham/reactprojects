require('dotenv').config()

const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
//middleware
app.use(cors())
app.use(express.json())

//ROUTES

//create todo
app.post("/todos", async (req, res) => {
    try {

        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        res.json(newTodo.rows[0])
    } catch (err) {
        console.log("error")
        console.error(err)
    }
})
// get all todos
app.get("/todos", async (req, res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo")
        res.json(todos.rows)
    } catch (err) {
        console.log("error")
        console.error(err)
    }
})
//get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(todo)
        console.log(req.params)
    } catch (err) {
        console.log("error")
        console.error(err)
    }
})
//update a todo

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const todo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json(todo)
    } catch (err) {
        console.log("error")
        console.error(err)
    }
})

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedTodo = await pool.query("DELETE from todo WHERE todo_id = $1", [id])
        res.json("todo was deleted")
    } catch (err) {
        console.log("error")
        console.error(err)
    }
})


app.listen(5000, () => {
    console.log("server has started")
})