import "./App.css";
import { Layout } from "antd";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import UserDetails from "./Components/UserDetails";
import QrApp from "./Components/QrApp";
import Moives from "./Components/Moives";
import Sortable from "./Components/Sortable";
import Header from "./Common/CommonHeader";
import Fetch from "./Components/Fetch";

function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <Header />
        </Header>

        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/redux-toolkit" element={<Fetch />} />
          <Route path="/users" element={<UserDetails />} />
          <Route path="/qrConverter" element={<QrApp />} />
          <Route path="/movies-data" element={<Moives />} />
          <Route path="/sortable" element={<Sortable />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
