import React, { useState, useEffect } from "react";
import { Row, Button, Modal, Table } from "antd";

import { UserData } from "../api/index.js";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slice/UserSclice.js";
import { clearAllUsers } from "../store/actions";

import DisplayUsers from "./DisplayUsers.js";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (value) => {
    dispatch(addUser(value));
  };

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState([]);
  console.log({ userData });

  const fetchedData = useSelector((state) => state.todo || []);

  console.log(fetchedData);

  useEffect(() => {
    if (
      fetchedData &&
      fetchedData.data &&
      Array.isArray(fetchedData.data.entries)
    ) {
      setUserData(fetchedData.data.entries);
    }
  }, [fetchedData]);

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
  return (
    <>
      <center>
        <h2 className="admin-subtitle">
          <p>Add Random Users</p>
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

        <div style={{ margin: "2em" }}>
          <Row justify={"space-around"}>
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
                setShowModal(true);
              }}
            >
              Show Data
            </Button>
          </Row>
        </div>
        <Modal
          title={userData.length > 0 && "Fetched Data "}
          open={showModal}
          footer={false}
          centered={true}
          maskClosable={false}
          onCancel={() => {
            setShowModal(false);
          }}
          width={1000}
        >
          {userData.length > 0 ? (
            <Table size="small" dataSource={userData} columns={columns} />
          ) : (
            <center>
              <h3>No Data Fetched </h3>
            </center>
          )}
        </Modal>

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
