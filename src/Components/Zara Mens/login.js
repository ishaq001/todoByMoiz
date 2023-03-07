import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Account from "./Account";
import DrawerLeft from "./Drawer";
import TextField from "@mui/material/TextField";

export default function Logins(props) {
  return (
    <Box
      sx={{
        width: 500,
        height: 900,
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>LOG IN TO YOUR ACCOUNT</h2>

        
        <TextField
          id="standard-basic"
          label="EMAIL ADD.: "
          variant="standard"
          // value={email}
          // onChange={(e) => {
          //   handleemailchange(e);
          // }}
        />{" "}
        <br />
        <TextField
          id="standard-basic"
          label="PASSWORD: "
          variant="standard"
          // value={password}
          // onChange={(e) => {
          //   handlepasswordchange(e);
          // }}

        />{" "}

        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
        <br />
        <div className="d-grid gap-1 mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <br />
        <br />
        <Box>
          <h2>NEED AN ACCOUNT?</h2>

          <div>
            <Link to="/Account">REGISTER</Link>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
