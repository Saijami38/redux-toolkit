import React from "react";
import { Row, Col, Button, Layout, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Header } = Layout;

export default function CommonHeader(props) {
  const location = useLocation();

  const app_version = "Version 10.15.23.02";
  console.log(app_version, "app_version");

  const onClose = () => {
    props?.onClose();
  };

  return (
    <>
      <div>
        <Layout>
          <Header className="headerwar-header show-on-desktop">
            <Row justify="space-between">
              <Col span={24}>
                <Row justify={"space-between"}>
                  <Link to="/">
                    <Col>
                      <Button
                        className="warehouseHeaderButton"
                        style={{
                          backgroundColor:
                            location.pathname === "/"
                              ? "#3c68a4"
                              : location.pathname === "/redux-toolkit"
                              ? "#3c68a4"
                              : "#444654",
                          color: "#FFF",
                        }}
                      >
                        <span>Fetch Data</span>
                      </Button>
                    </Col>
                  </Link>
                  <Link to="/users">
                    <Col>
                      <Button
                        className="warehouseHeaderButton"
                        style={{
                          backgroundColor:
                            location.pathname === "/users"
                              ? "#3c68a4"
                              : "#444654",
                          color: "#FFF",
                        }}
                      >
                        <span>Users</span>
                      </Button>
                    </Col>
                  </Link>
                  <Link to="/qrConverter">
                    <Col>
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
                    </Col>
                  </Link>
                  {/* <Link to="/qrConverter">
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
                </Link> */}
                  <Link to="/movies-data">
                    <Col>
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
                    </Col>
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
                 <Link to="/vehicleList">
                    <Col>
                      <Button
                        className="warehouseHeaderButton"
                        style={{
                          backgroundColor:
                            location.pathname === "/vehicleList"
                              ? "#3c68a4"
                              : "#444654",
                          color: "#FFF",
                        }}
                      >
                        <span>Vehicle List</span>
                      </Button>
                    </Col>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Header>
        </Layout>

        {props && props?.open && (
          <Drawer
            onClose={onClose}
            placement={"bottom"}
            open={props?.open}
            maskClosable={false}
            height={"100px"}
            headerStyle={{ padding: "6px 12px" }}
            bodyStyle={{ padding: "12px" }}
            scrollBottom={false}
            scroll={{ x: "290px", y: "0px" }}
          >
            <Row
              gutter={[10, 10]}
              style={{
                flexWrap: "nowrap",
                alignItems: "center",
              }}
            >
              <Col
                className="sub-buttons"
                style={{ textAlign: "center", width: "100%" }}
              >
                <Link to="/" title="Fetch">
                  <Button
                    onClick={() => {
                      onClose();
                    }}
                    style={{
                      backgroundColor:
                        location.pathname === "/"
                          ? "#3c68a4"
                          : location.pathname === "/redux-toolkit"
                          ? "#3c68a4"
                          : "#FFF",
                      color:
                        location.pathname === "/"
                          ? "#FFF"
                          : location.pathname === "/redux-toolkit"
                          ? "#FFF"
                          : "#3c68a4",
                    }}
                  >
                    <span
                      className="menuitem_lin"
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      Fetch Data
                    </span>
                  </Button>
                </Link>
              </Col>
              <Col
                className="sub-buttons"
                style={{ textAlign: "center", width: "100%" }}
              >
                <Link to="/users" title="Users">
                  <Button
                    onClick={() => {
                      onClose();
                    }}
                    style={{
                      backgroundColor:
                        location.pathname === "/users" ? "#3c68a4" : "#FFF",
                      color:
                        location.pathname === "/users" ? "#FFF" : "#3c68a4",
                    }}
                  >
                    <span
                      className="menuitem_lin"
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      Users
                    </span>
                  </Button>
                </Link>
              </Col>
              <Col
                className="sub-buttons"
                style={{ textAlign: "center", width: "100%" }}
              >
                <Link to="/movies-data" title="Users">
                  <Button
                    onClick={() => {
                      onClose();
                    }}
                    style={{
                      backgroundColor:
                        location.pathname === "/movies-data"
                          ? "#3c68a4"
                          : "##FFF",

                      color:
                        location.pathname === "/movies-data"
                          ? "#FFF"
                          : "#3c68a4",
                    }}
                  >
                    <span
                      className="menuitem_lin"
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      Movies Data
                    </span>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Drawer>
        )}
      </div>
    </>
  );
}
