import React from "react";
import { Button } from "antd";
// import { clearAllUsers } from "../store/slice/UserSclice";
import { clearAllUsers } from "../store/actions";
import { useDispatch } from "react-redux";

function DeleteAllUsers() {
  const dispatch = useDispatch();
  return (
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
  );
}

export default DeleteAllUsers;
