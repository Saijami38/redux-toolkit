import React from "react";
import { Col, Row, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Back() {
  return (
    <div>
      <Row>
        <Button
          style={{
            backgroundColor: "#000",
            color: "white",
            border: "none",
            margin: "5px",
            borderRadius: "5px",
            transition: "background-color 0.5 ease",
            cursor: "pointer",
            marginTop:"40px"
          }}
          onClick={() => window.history.go(-1)}
        >
          <Col>
            <ArrowLeftOutlined /> Back
          </Col>
        </Button>
      </Row>
    </div>
  );
}

export default Back;
