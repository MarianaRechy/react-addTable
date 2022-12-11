import * as React from "react";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const TodoTable = ({ title, completed, id, userId }) => {
  const icontrue = <CheckIcon />;
  const iconfalse = <CloseIcon />;

  return (
    <Box display="flex" flexDirection="row">
      <Box sx={{ pr: 3, border: 1, width: 20 }}>{id}</Box>
      <Box sx={{ pr: 3, border: 1, width: 20 }}>{userId}</Box>
      <Box sx={{ pr: 3, border: 1, width: 300 }}>{title}</Box>
      <Box sx={{ pr: 3, border: 1, width: 50, alignItems: "center" }}>
        {completed ? icontrue : iconfalse}
      </Box>
    </Box>
  );
};

export default TodoTable;


