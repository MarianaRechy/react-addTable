import React from "react";
import useFetch from "./Hook/useFetch";
import TodoTable from "./TodoTable";
import { Grid } from "@mui/material";
import TodoApp from "./TodoApp";

const TodoTableList = () => {
  const users = useFetch(`https://jsonplaceholder.typicode.com/todos`);
  const info = users.data;
  console.log("info", info);

  return (
    <Grid>
      <TodoApp />
      <div>
        {info.map((user, index) => {
          const { id, title, completed, userId } = user;
          return (
            <TodoTable
              key={index}
              id={id}
              userId={userId}
              title={title}
              completed={completed}
            />
          );
        })}
      </div>
    </Grid>
  );
};

export default TodoTableList;
