import React from "react";
import { Button } from "antd";
import DeleteAllUsers from "./DeleteAllUsers.js";
import { UserData } from "../api/index.js";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSclice.js";
import DisplayUsers from "./DisplayUsers.js";
import ListTodo from "./ListTodo.js";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (value) => {
    dispatch(addUser(value));
  };
  const app_version = "Version 08.24.23.02";
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
      <Link to="/qrConverter">
        <Button
          style={{
            backgroundColor: "#abc4ff",
            color: "white",
            border: "none",
            margin: "5px",
            borderRadius: "5px",
            transition: "background-color 0.5 ease",
          }}
        >
          QR Converter
        </Button>
      </Link>
      <Link to="/movies-data">
        <Button
          style={{
            backgroundColor: "#abc4ff",
            color: "white",
            border: "none",
            margin: "5px",
            borderRadius: "5px",
            transition: "background-color 0.5 ease",
          }}
        >
           Moives Data 
        </Button>
      </Link>

      <ul style={listStyle}>
        <DisplayUsers />
      </ul>
      <hr style={hrStyle} />
      <DeleteAllUsers />
      <hr />
      <ListTodo />
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
