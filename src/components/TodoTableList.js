import React from "react";
import useFetch from "./Hook/useFetch";
import TodoTable from "./TodoTable";
import {  Box, Grid } from "@mui/material";


const TodoTableList = () => {
  const users = useFetch(`https://jsonplaceholder.typicode.com/todos`);
  const info = users.data;
  console.log("info", info);

  return (
    <Grid>
    <Box display="flex" flexDirection="row" >
    <Box sx={{ pr: 3, border: 1, width:20 }}>
      "#"
    </Box>
    <Box sx={{ pr: 3, border: 1, width:20 }}>
      User
    </Box>
    <Box sx={{ pr: 3, border: 1, width:300 }}>
      Description
    </Box>
    <Box sx={{ pr: 3, border: 1, width:50}}>
     Completed
    </Box>
  </Box>
    <div>
      {info.map((user) => {
        const { id, title, completed, userId } = user;
        return <TodoTable id={id} userId={userId} title={title} completed={completed} />;
      })}
    </div>
    </Grid>
  );
};

export default TodoTableList;
