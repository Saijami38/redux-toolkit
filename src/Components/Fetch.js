import React from "react";
import ListTodo from "./ListTodo.js";
import { Tooltip } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Fetch = () => {
  const app_version = "Version 08.25.23.02";
  console.log(app_version, "app_version");

  return (
    <>
      <center>
        <h2 className="admin-subtitle">
          <p>
            Welcome to Redux-Fetch-Master
            <span>&nbsp;</span>
            <span>
              <Tooltip title="prompt text">
                <ExclamationCircleOutlined
                  style={{
                    cursor: "pointer",
                    color: "#ffba00",
                    fontSize: "2dvh",
                  }}
                />
              </Tooltip>
            </span>
          </p>
        </h2>

        <ListTodo />
      </center>
    </>
  );
};
// Define styles

export default Fetch;
