import React, { useState, useEffect } from "react";
import { Input, Col, Row, Space, Button, Modal, Table } from "antd";
import { QrReader } from "react-qr-reader";

import QRCode from "react-qr-code";

import { useDispatch, useSelector } from "react-redux";
import { setQR, resetQR } from "../store/slice/QrSlice";
import Back from "./../Common/Back";

function QrApp() {
  const [showModal, setShowModal] = useState(false);
  const [showQr] = useState(true);
  const [userData, setUserData] = useState([]);
  const [QrData, setQrData] = useState("No result");

  useEffect(() => {
    setUserData(fetchedData?.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Back />
        <Row>
          {/* <Col>
            <Button
              onClick={() => {
                setShowQr(!showQr);
              }}
            >
              QR Reader
            </Button>
          </Col> */}
        </Row>
      </div>
      {showQr && (
        <>
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
        </>
      )}
      {!showQr && (
        <>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setQrData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "100%" }}
          />
          <div>{QrData}</div>
        </>
      )}

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
      >
        {userData.length > 0 ? (
          <Table size="small" dataSource={userData} columns={columns} />
        ) : (
          <center>
            <h3>No Data Fetched </h3>
          </center>
        )}
      </Modal>
    </center>
  );
}

export default QrApp;
