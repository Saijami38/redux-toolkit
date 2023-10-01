import React from "react";
import { Row, Col, Button, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Header } = Layout;

export default function CommonHeader() {
  const location = useLocation();

  return (
    <div>
      <Layout>
        <Header className="headerwar-header">
          <Row justify="space-between">
            <Col span={24}>
              <Row justify={"space-between"}>
                <Link to="/">
                  <Button
                    className="warehouseHeaderButton"
                    style={{
                      backgroundColor:
                        location.pathname === "/" ? "#3c68a4" : "#444654",
                      color: "#FFF",
                    }}
                  >
                    <span>Users</span>
                  </Button>
                </Link>
                <Link to="/qrConverter">
                  <Button
                    className="warehouseHeaderButton"
                    style={{
                      backgroundColor:
                        location.pathname === "/qrConverter"
                          ? "#3c68a4"
                          : "#444654",
                      color: "#FFF",
                    }}
                  >
                    <span>QR Converter</span>
                  </Button>
                </Link>

                <Link to="/movies-data">
                  <Button
                    className="warehouseHeaderButton"
                    style={{
                      backgroundColor:
                        location.pathname === "/movies-data"
                          ? "#3c68a4"
                          : "#444654",
                      color: "#FFF",
                    }}
                  >
                    <span>Movies Data</span>
                  </Button>
                </Link>
                {/* <Link to="/sortable">
                  <Button
                    className="warehouseHeaderButton"
                    style={{
                      backgroundColor:
                        location.pathname === "/sortable"
                          ? "#3c68a4"
                          : "#444654",
                      color: "#FFF",
                    }}
                  >
                    <span>Sortable</span>
                  </Button>
                </Link> */}
              </Row>
            </Col>
          </Row>
        </Header>
      </Layout>

      <br />
    </div>
  );
}
