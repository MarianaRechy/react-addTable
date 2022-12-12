import { Grid, Box } from "@mui/material";
import React from "react";
import TodoItem from "./TodoIntem/TodoItem";

const TodoList = ({ todoList, completeTodo }) => {
  return (
    <Grid>
      <Box display="flex" flexDirection="row" sx={{ pt: 3 }}>
        <Box sx={{ pr: 3, border: 1, width: 20 }}>"#"</Box>
        <Box sx={{ pr: 3, border: 1, width: 20 }}>User</Box>
        <Box sx={{ pr: 3, border: 1, width: 300 }}>Description</Box>
        <Box sx={{ pr: 3, border: 1, width: 50 }}>Completed</Box>
      </Box>
      <Box>
        {todoList.map((todo, index) => (
          <Box key={index}>
            <TodoItem
              text={todo.text}
              completed={todo.completed}
              completeTodo={completeTodo}
              index={index}
            />
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default TodoList;
