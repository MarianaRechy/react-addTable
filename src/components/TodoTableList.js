import React from "react";
import useFetch from "./Hook/useFetch";
import TodoTable from "./TodoTable";
import { Box, Grid } from "@mui/material";
import TodoApp from "./TodoApp";

const TodoTableList = () => {
  const users = useFetch(`https://jsonplaceholder.typicode.com/todos`);
  const info = users.data;
  console.log("info", info);

  return (
    <Grid>
      <TodoApp />
      <div>
        {info.map((user) => {
          const { id, title, completed, userId } = user;
          return (
            <TodoTable
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
