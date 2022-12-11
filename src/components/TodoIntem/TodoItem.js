import React from "react";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const TodoItem = ({ text, completed, completeTodo, index }) => {
  const icontrue = <CheckIcon />;
  const iconfalse = <CloseIcon />;
  let newtask = !{completeTodo}

  return (

   completeTodo ? 
    <Box
      style={{ backgroundColor: "grey" }}
      sx={{ width: 497 }}
      display="flex"
      flexDirection="row"
    >
      <Box sx={{ pr: 3, border: 1, width: 20 }}> random id</Box>
      <Box sx={{ pr: 3, border: 1, width: 20 }}> random user</Box>
      <Box sx={{ pr: 3, border: 1, width: 300 }}>{text}</Box>
      <Box sx={{ pr: 3, border: 1, width: 50, alignItems: "center" }}>
        { newtask ? icontrue : iconfalse}
      </Box>
    </Box>
   : null
  );
};

export default TodoItem;

/*
  const [task, setTask] = useState( !{completeTodo} );
  
  const defaultTask = (() =>{
    setTask (completeTodo)
  })

  const newtask= defaultTask(task)
*/
