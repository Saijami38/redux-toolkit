import React from "react";
import { Button } from "antd";
import { fetchTodos, fetchOtherData } from "../store/slice/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

function ListTodo() {
  const dispatch = useDispatch();
  const finalData = useSelector((state) => state.todo);

  if (finalData?.isLoading) {
    return <h2>Loading .....</h2>;
  }

  return (
    <div>
      <Button
        style={{
          backgroundColor: "#abc4ff",
          color: "white",
          border: "none",
          margin: "5px",
          borderRadius: "5px",
          transition: "background-color 0.5s ease",
        }}
        onClick={() => {
          dispatch(fetchTodos());
        }}
      >
        Fetch Todo Data
      </Button>
      <Button
        style={{
          backgroundColor: "#abc4ff",
          color: "white",
          border: "none",
          margin: "5px",
          borderRadius: "5px",
          transition: "background-color 0.5s ease",
        }}
        onClick={() => {
          dispatch(fetchOtherData());
        }}
      >
        Fetch Other Data
      </Button>
      <ul>
        {finalData && finalData.data?.map((e) => <li key={e.id}>{e.title}</li>)}
      </ul>
    </div>
  );
}

export default ListTodo;
