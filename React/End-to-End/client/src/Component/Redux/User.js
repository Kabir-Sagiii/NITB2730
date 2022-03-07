import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import userAction from "../../Actions/userAction";

function ReduxUser(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then((res) => {
      console.log(res.data.results);
      setUser(res.data.results);

      userAction(res.data.results);
    });
  }, []);
  return (
    <div className="container mt-5">
      <div className="row text-primary">
        <h2>Redux with Functional Component</h2>
        <p className="lead text-dark">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          explicabo molestias voluptatum perferendis delectus quibusdam
          excepturi numquam laudantium necessitatibus accusantium minus, est
          dicta fuga eum, voluptatem, suscipit adipisci quasi dolor nihil odio.
          Perspiciatis hic similique tempore ea culpa error iste dolor!
          Accusamus omnis cupiditate assumenda adipisci sed facere saepe
          quisquam temporibus, debitis itaque aut accusantium! Totam, laborum!
          Omnis pariatur, nobis ab esse laboriosam veritatis adipisci aliquid
          quod reiciendis? Maiores, accusamus.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col">
          <table className="table table-hover">
            <thead className="table-dark text-white">
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {user.length > 0 ? (
                user.map((e, i) => {
                  return (
                    <tr key={i + 1}>
                      <td>
                        {e.name.first}
                        {e.name.last}
                      </td>
                      <td>{e.email}</td>
                      <td>{e.location.city}</td>
                      <td>
                        <Link
                          to={`/details/${e.phone}`}
                          className="btn btn-outline-primary"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div>Data is not Aviable</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReduxUser;
