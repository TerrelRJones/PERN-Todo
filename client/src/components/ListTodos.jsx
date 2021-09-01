import React, { useState } from "react";
import { useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // delete todo
  const deleteTodo = async (id) => {
    await fetch(`/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((todo) => todo.todo_id !== id));
  };

  // get todos
  const fetchTodos = async () => {
    const data = await fetch("/todos");
    const jsonData = await data.json();

    setTodos(jsonData);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">List Todos</h1>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
