import React from "react";
import ListTodo from "./ListTodo.js";
import { Popover } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Fetch = () => {
  return (
    <>
      <center>
        <h2 className="admin-subtitle">
          <p>
            Welcome to Redux-Fetch-Master
            <span>&nbsp;</span>
            <span>
              <Popover
                content={"User can access this through out the application"}
                placement="bottomRight"
              >
                <span style={{ color: " #D9C121" }}>
                  <ExclamationCircleOutlined
                    style={{
                      cursor: "pointer",
                      color: "#ffba00",
                      fontSize: "2dvh",
                    }}
                  />
                </span>
              </Popover>
            </span>
          </p>
        </h2>

        <ListTodo />
      </center>
    </>
  );
};

export default Fetch;
