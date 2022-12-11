import React from "react";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const TodoItem = ({ text, completeTodo, index }) => {
  const icontrue = <CheckIcon />;
  const iconfalse = <CloseIcon />;
  let newtask = !{ completeTodo };

  let maxNumber = 100;
  let randomId = Math.floor(Math.random() * maxNumber + 1);
  let randomUser = Math.floor(Math.random() * maxNumber + 2);

  return completeTodo ? (
    <Box
      style={{ backgroundColor: "grey" }}
      sx={{ width: 497 }}
      display="flex"
      flexDirection="row"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ pr: 3, border: 1, width: 20 }}
      >
        {randomId}
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ pr: 3, border: 1, width: 20 }}
      >
        {randomUser}
      </Box>
      <Box sx={{ pr: 3, border: 1, width: 300 }}>{text}</Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{ pr: 3, border: 1, width: 50, alignItems: "center" }}
      >
        {newtask ? icontrue : iconfalse}
      </Box>
    </Box>
  ) : null;
};

export default TodoItem;
