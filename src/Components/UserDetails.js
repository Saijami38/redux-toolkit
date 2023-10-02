import React from "react";
import { Button } from "antd";
import { UserData } from "../api/index.js";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSclice.js";
import { clearAllUsers } from "../store/actions";

import DisplayUsers from "./DisplayUsers.js";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (value) => {
    dispatch(addUser(value));
  };
  const app_version = "Version 08.25.23.02";
  console.log(app_version, "app_version");

  return (
    <>
      <center>
        <h2 className="admin-subtitle">
          <p>Welcome to Redux-Fetch-Master</p>
        </h2>
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
        <Button
          style={{
            backgroundColor: "#f7665e",
            color: "white",
            border: "none",
            margin: "5px",
            borderRadius: "5px",
            transition: "background-color 0.5 ease",
          }}
          onClick={() => {
            dispatch(clearAllUsers());
          }}
        >
          Delete All Users
        </Button>

        <ul style={listStyle}>
          <DisplayUsers />
        </ul>
      </center>
    </>
  );
};
// Define styles

const listStyle = {
  listStyleType: "none",
  padding: "0",
};

export default UserDetails;
