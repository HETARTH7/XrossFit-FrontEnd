import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
