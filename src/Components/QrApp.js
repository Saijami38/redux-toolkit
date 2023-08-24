import React, { useState, useEffect } from "react";
import { Input, Col, Row, Space, Button, Modal, Table } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import QRCode from "react-qr-code";

import { useDispatch, useSelector } from "react-redux";
import { setQR, resetQR } from "../store/slice/QrSlice";

function QrApp() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(fetchedData?.data);
  }, []);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.QR);
  const fetchedData = useSelector((state) => state.todo);

  const columns = [
    {
      title: "S.No",
      dataIndex: "id",
    },

    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "UserId",
      dataIndex: "userId",
    },
    {
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return (
          <div>
            {completed !== null && completed !== undefined ? completed : "N/A"}
          </div>
        );
      },
    },
  ];

  return (
    <center>
      <div style={{ margin: "2em" }}>
        <Row justify={"start"}>
          <Col>
            <span onClick={() => window.history.go(-1)}>
              <ArrowLeftOutlined /> Back
            </span>
          </Col>
        </Row>

        <Row justify={"space-around"}>
          <Col>
            <b className="add-names">Enter Text</b>
            <Space />
            <Input
              value={data}
              onChange={(e) => {
                dispatch(setQR((e?.target?.value).toString()));
              }}
            />
            <Col>
              <br />
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
                  dispatch(resetQR());
                }}
              >
                Reset
              </Button>
            </Col>
          </Col>
        </Row>
      </div>
      <div style={{ margin: "2em" }}>
        <QRCode value={data} />
      </div>

      <b className="add-names"> Debuged Value</b>
      <div style={{ margin: "2em" }}>
        <a target="blank" href={data}>
          {data}
        </a>
      </div>
      <hr />
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
        title="Fetched Data "
        open={showModal}
        footer={false}
        onCancel={() => {
          setShowModal(false);
        }}
      >
        <Table size="small" dataSource={userData} columns={columns} />
      </Modal>
    </center>
  );
}

export default QrApp;
