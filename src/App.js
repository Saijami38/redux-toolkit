import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import UserDetails from "./Components/UserDetails";
import QrApp from "./Components/QrApp";
import Moives from "./Components/Moives";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/redux-toolkit" element={<UserDetails />} />
        <Route path="/qrConverter" element={<QrApp />} />
        <Route path="/movies-data" element={<Moives />} />
      </Routes>
    </Router>
  );
}

export default App;
