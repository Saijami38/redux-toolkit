import "./App.css";
import { Layout } from "antd";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import UserDetails from "./Components/UserDetails";
import QrApp from "./Components/QrApp";
import Moives from "./Components/Moives";
import Sortable from "./Components/Sortable";
import Header from "./Common/CommonHeader";

function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <Header />
        </Header>

        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="/redux-toolkit" element={<UserDetails />} />
          <Route path="/qrConverter" element={<QrApp />} />
          <Route path="/movies-data" element={<Moives />} />
          <Route path="/sortable" element={<Sortable />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
