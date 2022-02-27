import axios from "axios";

export const sendDataToServer = (userDetails) => {
  console.log(userDetails);
  axios.post("http://localhost:2121/UserRoute/storeUserData", userDetails).then(
    (res) => {
      alert(res.data);
    },
    (err) => {
      alert("Error");
      console.log(err);
    }
  );
};

export const deleteUserFromDB = (id) => {
  return axios.delete(`http://localhost:2121/UserRoute/deleteUserData/${id}`);
};

export const getAllUserData = () => {
  return axios.get("http://localhost:2121/UserRoute/getuserdatafromdb");
};
