import React from "react";
import { Row, Col, Button, Layout } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

export default function CommonHeader() {
  const buttonStyle = {
    backgroundColor: "gray",
    color: "#FFF",
    borderRadius: "5px",
    margin: "0 5px", // Add margin to space the buttons
  };

  return (
    <div>
      <Layout>
        <Header className="headerwar-header" style={{ background: "gray" }}>
          <Row justify="space-between">
            <Col span={24}>
              <Row gutter={16}>
                <Col>
                  <Link to="/qrConverter">
                    <Button
                      className="warehouseHeaderButton"
                      style={{
                        ...buttonStyle,
                        backgroundColor:
                          window.location.pathname === "/qrConverter"
                            ? "grey"
                            : "blue",
                      }}
                    >
                      <span>QR Converter</span>
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/movies-data">
                    <Button
                      className="warehouseHeaderButton"
                      style={{
                        ...buttonStyle,
                        backgroundColor:
                          window.location.pathname === "/movies-data"
                            ? "grey"
                            : "blue",
                      }}
                    >
                      <span>Movies Data</span>
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/sortable">
                    <Button
                      className="warehouseHeaderButton"
                      style={{
                        ...buttonStyle,
                        backgroundColor:
                          window.location.pathname === "/sortable"
                            ? "grey"
                            : "blue",
                      }}
                    >
                      <span>Sortable</span>
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
      </Layout>

      <br />
    </div>
  );
}
