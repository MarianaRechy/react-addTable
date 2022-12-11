import React, { useState } from "react";
import TodoInput from "./Todoinput";
import TodoList from "./TodoList";


const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) =>
    setTodoList([...todoList, { text, completed: false }]);

  const completeTodo = (index) => {
    setTodoList(
      todoList.map((item, i) => {
        if (i !== index) {
          return item;
        } else {
          return { ...item, completed: !item.completed };
        }
      })
    );
  };


  console.log("todoList", todoList);

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} completeTodo={completeTodo}/>
    </div>
  );
};

export default TodoApp;