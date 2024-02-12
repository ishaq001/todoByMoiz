import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => (
  <Box>
    <Box
      sx={{
        width: "53%",
        display: "flow",
        justifyContent: "center",
        
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <h2>TODO INPUT</h2>
        </Box>

        <TextField 
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          fullWidth
          label="NEW TODO"
          id="fullWidth"
        />

        <Box>
          <Stack spacing={2} direction="row">
            <Button
              style={{ width: "100%", height: "40px" }}
              variant="contained"
              className="newBtn"
              type="submit"
            >
              ADD NEW TASK
            </Button>
          </Stack>
        </Box>
      </form>
    </Box>

    <br />

    <Box sx={{ display: "flow", justifyContent: "center" }}>
      <Stack spacing={2} direction="row">
        <Button style={{ width: "220px", height: "40px" }} variant="contained">
          ALL
        </Button>
        <Button style={{ width: "220px", height: "40px" }} variant="contained">
          DONE
        </Button>
        <Button style={{ width: "210px", height: "40px" }} variant="contained">
          TODO
        </Button>
      </Stack>
    </Box>
  </Box>
);

export default TodoForm;
