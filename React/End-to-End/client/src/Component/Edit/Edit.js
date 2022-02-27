import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useParams } from "react-router-dom";
import axios from "axios";

const paperstyle = {
  width: "300px",
  height: "60vh",
  padding: "30px",
  margin: "30px auto",
  //   backgroundColor: "red",
};
function Edit(props) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const updateData = () => {
    axios
      .put(
        `http://localhost:2121/UserRoute/updateUserData/${id}`,
        {},
        {
          params: {
            name: name,
            email: email,
            city: city,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:2121/UserRoute/getoneuserinfo/${id}`)
      .then((res) => {
        console.log(res.data.name);
        setName(res.data.name);
        setEmail(res.data.email);
        setCity(res.data.city);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3>Update User Data</h3>
            </div>
            <div className="card-body">
              <div className="mt-2">
                <input
                  value={name}
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mt-2">
                <input
                  value={city}
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <button onClick={updateData} className="btn mt-2 btn-primary">
                Update Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <Grid>
        <Paper style={paperstyle}>
          <Grid align="center" style={{ marginBottom: "20px" }}>
            <AccountCircleIcon fontSize="large" />
          </Grid>
          <TextField
            defaultValue={name}
            fullWidth
            label="User Name"
            variant="standard"
          />

          <TextField
            defaultValue={email}
            fullWidth
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            defaultValue={city}
            fullWidth
            label="City"
            variant="standard"
            // value={city}
            // onChange={(e) => {
            //   setCity(e.target.value);
            // }}
          />
          <Grid align="center">
            <Button style={{ marginTop: "20px" }} variant="contained">
              Update Data
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Edit;
