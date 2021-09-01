import React from "react";
import { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(`input ---> ${response}`);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">PERN TODO LIST</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
