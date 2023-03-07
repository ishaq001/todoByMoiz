import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkedbox from "./Todo_items";
import { textAlign } from "@mui/system";

export default function TodoApp() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",

          border: "2px  ",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 550,
            maxWidth: "200%",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <h2>TODO INPUT</h2>
          </Box>

          <TextField fullWidth label="NEW TODO" id="fullWidth" />  

          <Box>
            <Stack spacing={2} direction="row">
              <Button
                style={{ width: "100%", height: "40px" }}
                variant="contained"
              >
                ADD NEW TASK
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "50px",

          border: "5px ",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {" "}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            
            {" "}
            <h2>TODO LIST</h2>
          </Box>

          <Stack spacing={2} direction="row">
            <Button
              style={{ width: "180px", height: "40px" }}
              variant="contained"
            >
              ALL
            </Button>
            <Button
              style={{ width: "180px", height: "40px" }}
              variant="contained"
            >
              DONE
            </Button>
            <Button
              style={{ width: "160px", height: "40px" }}
              variant="contained"
            >
              TODO
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box>
        {" "}
        <Checkedbox />
      </Box>
    </Box>
  );
}
