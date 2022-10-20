import axios from "axios";
import React, { useState } from "react";
import UserCount from "./UserCount";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  axios
    .get("http://localhost:5000/user")
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err));
  const deleteUser = (id) => {
    axios
      .post(`http://localhost:5000/user/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setUsers((prevValue) => {
      return prevValue.filter((index) => {
        return index._id !== id;
      });
    });
  };
  return (
    <div>
      <h1>Users</h1>
      <UserCount />
      <div>
        {users.map((user) => {
          return (
            <div key={user.username}>
              <p value={user}>{user.username}</p>
              <button onClick={() => deleteUser(user._id)}>DELETE USER</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
