import React from "react";
import TodoItem from "./TodoIntem/TodoItem";


const TodoList = ({ todoList, completeTodo }) => {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index} >
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            completeTodo={completeTodo}
            index={index}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;