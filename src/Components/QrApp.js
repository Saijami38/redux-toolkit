import React from "react";
import { Input, Col, Row, Space, Button } from "antd";
import QRCode from "react-qr-code";

import { useDispatch, useSelector } from "react-redux";
import { setQR, resetQR } from "../store/slice/QrSlice";

function QrApp() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.QR);
  return (
    <center>
      <div style={{ margin: "2em" }}>
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
    </center>
  );
}

export default QrApp;
