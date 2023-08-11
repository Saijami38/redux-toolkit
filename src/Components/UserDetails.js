import React from "react";
import { Button } from "antd";
import DeleteAllUsers from "./DeleteAllUsers.js";
import { UserData } from "../api/index.js";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSclice.js";
import DisplayUsers from "./DisplayUsers.js";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (value) => {
    dispatch(addUser(value));
  };
  const app_version = "Version 08.11.23.02";
  console.log(app_version, "app_version");

  return (
    <center>
      <h2 className="admin-subtitle">List of Users</h2>
      <Button
        style={{
          backgroundColor: "#abc4ff",
          color: "white",
          border: "none",
          margin: "5px",
          borderRadius: "5px",
          transition: "background-color 0.5 ease",
        }}
        onClick={() => {
          addNewUser(UserData());
        }}
      >
        Add New Users
      </Button>

      <ul style={listStyle}>
        <DisplayUsers />
      </ul>
      <hr style={hrStyle} />
      <DeleteAllUsers />
    </center>
  );
};

// Define styles

const listStyle = {
  listStyleType: "none",
  padding: "0",
};

const hrStyle = {
  border: "1px solid grey",
  width: "80%",
};

export default UserDetails;
