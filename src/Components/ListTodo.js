import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import Loading from "../Common/Loading";
import { fetchTodos } from "../store/slice/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

function ListTodo() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const finalData = useSelector((state) => state.todo || []);

  const columns = [
    {
      title: "API",
      dataIndex: "API",
    },
    {
      title: "Description",
      dataIndex: "Description",
    },
    {
      title: "Auth",
      dataIndex: "Auth",
    },
    {
      title: "Link",
      dataIndex: "Link",
    },
    {
      title: "Category",
      dataIndex: "Category",
    },
  ];

  useEffect(() => {
    if (finalData?.isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [finalData?.isLoading]);

  return (
    <>
      <div style={{ minHeight: "100dvh" }}>
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
          Fetch Data
        </Button>

        {finalData?.isLoading === false && (
          <Table
            columns={columns}
            dataSource={
              finalData?.data?.entries.length > 0 && finalData?.data?.entries
            }
          />
        )}
      </div>
      <Loading enableLoading={loading} />
    </>
  );
}

export default ListTodo;
