import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { deleteUserFromDB, getAllUserData } from "../../Service/userAction";

function User(props) {
  const [user, setUser] = useState([]);

  const deleteUser = (id) => {
    deleteUserFromDB(id).then((res) => {
      alert(res.data);
      getAllUserData().then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
    });
  };
  useEffect(() => {
    getAllUserData().then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <p className="h2 text-primary">User Details</p>
      </div>
      <div className="row">
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          incidunt esse sunt quidem officia temporibus quos error aliquam
          exercitationem dolore impedit aliquid voluptas quam possimus fuga
          eaque harum suscipit expedita dignissimos! Adipisci reprehenderit
          maiores non nesciunt suscipit magnam, praesentium facilis!
        </p>
      </div>
      <div className="row mt-5">
        <div className="col">
          <table className="table table-hover table-stripped">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {user.length > 0 ? (
                user.map((e, i) => {
                  return (
                    <tr>
                      <td>{e._id}</td>
                      <td>
                        {e.name || <span className="text-danger">No data</span>}
                      </td>
                      <td>
                        {e.email || (
                          <span className="text-danger">No data</span>
                        )}
                      </td>
                      <td>
                        {e.city || <span className="text-danger">No data</span>}
                      </td>
                      <td>
                        <Link to={`/edit/${e._id}`} className="btn btn-primary">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="/user"
                          className="btn btn-primary"
                          onClick={() => {
                            deleteUser(e._id);
                          }}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="text-center">
                  <h2 className="text-danger">Data is not available</h2>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
