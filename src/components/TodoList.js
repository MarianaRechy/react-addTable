import { getTreeNodeDescendants } from "@mui/x-data-grid/hooks/features/rows/gridRowsUtils";
import React from "react";
import TodoItem from "./TodoIntem/TodoItem";


const TodoList = ({ todoList, completeTodo }) => {
  return (
    <ul style={{ textDecoration: "none"}}>
      {todoList.map((todo, index) => (
        <li  key={index} >
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