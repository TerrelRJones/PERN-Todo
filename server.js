const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { urlencoded, json, static } = require("express");
const path = require("path");
const db = require("./db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(json());
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));

app.use(static(path.join(__dirname, "client/build")));

// Serve static files from Client
if (process.env.NODE_ENV === "production") {
  app.use(static(path.join(__dirname, "client/build")));
}

//ROUTES

//CREATE TODO
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await db.query(
      "INSERT INTO todos (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//GET ALL TODO'S
app.get("/todos", async (req, res) => {
  try {
    const todos = await db.query("SELECT * FROM todos");

    res.json(todos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//GET 1 TODO
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.query("SELECT * FROM todos WHERE todo_id = $1", [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//EDIT TODOS
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const editTodo = await db.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("UPDATED");
  } catch (err) {
    console.log(err.message);
  }
});

//DELETE TODOS
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await db.query("DELETE FROM todos WHERE todo_id = $1", [
      id,
    ]);
    res.json(`TODO ${id} was deleted`);
  } catch (err) {
    console.log(err.message);
  }
});

// Catch all non-existent routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
