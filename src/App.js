import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import UserDetails from "./Components/UserDetails";
import QrApp from "./Components/QrApp";
import Moives from "./Components/Moives";
import Sortable from "./Components/Sortable";
import CommonHeader from "./Common/CommonHeader";
import Fetch from "./Components/Fetch";
import VehicleList from "./Components/VehicleList";
import VehicleListDetails from "./Components/VehicleListDetails";

function App() {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Router>
        <Layout
          style={{
            background: "#f0f2f5 ",
          }}
          className="mainLayout"
        >
          <CommonHeader open={open} onClose={onClose} />

          <Routes>
            <Route path="/" element={<Fetch />} />
            <Route path="/redux-toolkit" element={<Fetch />} />
            <Route path="/users" element={<UserDetails />} />
            <Route path="/qrConverter" element={<QrApp />} />
            <Route path="/movies-data" element={<Moives />} />
            <Route path="/sortable" element={<Sortable />} />
            <Route path="/vehicleList" element={<VehicleList />} />
            <Route path="/vehicleList/:id" element={<VehicleListDetails />} />
          </Routes>
        </Layout>
      </Router>
      <div className="mobile_view_footer show-on-mobile">
        <div
          style={{
            height: "45px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => onOpen()}
        >
          <AppstoreOutlined
            style={{
              height: "45px",
              alignItems: "center",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
