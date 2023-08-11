import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/redux-toolkit" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
