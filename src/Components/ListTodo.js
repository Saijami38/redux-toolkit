import React from "react";
import { Button } from "antd";
import { fetchTodos } from "../store/slice/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

function ListTodo() {
  const dispatch = useDispatch();
  const finalData = useSelector((state) => state.todo);
  console.log(finalData,"fina;")

  return (
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
        dispatch(fetchTodos());
      }}
    >
      Fetch Todo Data
    </Button>
  );
}

export default ListTodo;
