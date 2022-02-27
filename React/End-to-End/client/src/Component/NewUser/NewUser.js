import React, { useState } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { sendDataToServer } from "../../Service/userAction";
const paperstyle = {
  width: "300px",
  height: "60vh",
  padding: "30px",
  margin: "30px auto",
  //   backgroundColor: "red",
};
function NewUser(props) {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    city: "",
  });
  const sendDataToAction = () => {
    console.log(state);
    sendDataToServer(state);
  };
  return (
    <div>
      <Grid>
        <Paper style={paperstyle}>
          <Grid align="center" style={{ marginBottom: "20px" }}>
            <AccountCircleIcon fontSize="large" />
          </Grid>
          <TextField
            fullWidth
            label="User Name"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                name: e.target.value,
              });
            }}
          />
          <TextField
            type="password"
            fullWidth
            label="Password"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                password: e.target.value,
              });
            }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                city: e.target.value,
              });
            }}
          />
          <TextField
            fullWidth
            label="City"
            variant="standard"
            onChange={(e) => {
              setState({
                ...state,
                email: e.target.value,
              });
            }}
          />
          <Grid align="center">
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              onClick={sendDataToAction}
            >
              Register
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default NewUser;
