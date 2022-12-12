import * as React from "react";
import { Box, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const TodoTable = ({ title, completed, id, userId }) => {
  const icontrue = <CheckIcon />;
  const iconfalse = <CloseIcon />;

  //Using conditional for change background color
  return completed ? (
    <Grid>
      <Box sx={{ width: 497 }} display="flex" flexDirection="row">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ pr: 3, border: 1, width: 20 }}
        >
          {id}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ pr: 3, border: 1, width: 20 }}
        >
          {userId}
        </Box>
        <Box sx={{ pr: 3, border: 1, width: 300 }}>{title}</Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ pr: 3, border: 1, width: 50 }}
        >
          {completed ? icontrue : iconfalse}
        </Box>
      </Box>
    </Grid>
  ) : (
    <Grid>
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
          {id}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ pr: 3, border: 1, width: 20 }}
        >
          {userId}
        </Box>
        <Box sx={{ pr: 3, border: 1, width: 300 }}>{title}</Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ pr: 3, border: 1, width: 50, alignItems: "center" }}
        >
          {completed ? icontrue : iconfalse}
        </Box>
      </Box>
    </Grid>
  );
};

export default TodoTable;
