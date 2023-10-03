import React from "react";
import { Divider, Col, Row } from "antd";
import { MdDelete } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slice/UserSclice";

function DisplayUsers() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  return (
    <div style={{ minHeight: "100dvh" }}>
      <Col
        xxl={{ span: 12 }}
        xl={{ span: 12 }}
        lg={{ span: 12 }}
        md={{ span: 12 }}
        sm={{ span: 22 }}
        xs={{ span: 22 }}
      >
        {data.map((element, index) => (
          <div key={index}>
            <Divider />
            <Row justify="space-between" align="middle">
              <Col style={{ padding: "5px" }}>{element}</Col>
              <Col>
                <MdDelete
                  style={{
                    color: "red",
                    margin: "5px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                  onClick={() => {
                    dispatch(removeUser(element));
                  }}
                />
              </Col>
            </Row>
          </div>
        ))}
      </Col>
    </div>
  );
}

export default DisplayUsers;
