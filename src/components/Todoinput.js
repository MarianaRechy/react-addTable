
import React, { useState } from "react"; 

function TodoInput({ addTodo }) {
    const [text, setText] = useState("");

    const handleOnChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Function for add Todo
        addTodo(text);
        // Cleaning de Input
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>React Test</h3>
            <input placeholder = {"Descripcion"} value={text} onChange={handleOnChange} />
            <button type="submit">Crear</button>
        </form>
    );
}

export default TodoInput;
