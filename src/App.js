import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import UserDetails from "./Components/UserDetails";
import QrApp from "./Components/QrApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/redux-toolkit" element={<UserDetails />} />
        <Route path="/qrConverter" element={<QrApp />} />
      </Routes>
    </Router>
  );
}

export default App;
