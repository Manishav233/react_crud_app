import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
//useEffect is used to run the code once to get the users details
  useEffect(() => {
    loadUsers();
  }, []);

//code to show the users
  async function loadUsers() {
    const res = await axios.get(
      "https://6223a3133af069a0f9a70bdc.mockapi.io/users"
    );
    setUsers(res.data);
  }
//code to delete the user and show the remaining users using loadUsers method
  const deleteUser = async (index) => {
    await axios.delete(
      "https://6223a3133af069a0f9a70bdc.mockapi.io/users/" + index
    );
    loadUsers();
  };
//display the available users data in table and give options to view, edit or delete.
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="table-primary">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <NavLink
                    id="Action"
                    className="btn btn-primary"
                    exact
                    to={`/user/${user.id}`}
                  >
                    view
                  </NavLink>
                  <NavLink
                    id="Action"
                    className="btn btn-outline-primary"
                    exact
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </NavLink>
                  <button
                    id="Action"
                    className="btn btn-danger "
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
