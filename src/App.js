import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CoupDeCoeur from "./Pages/CoupDeCoeur";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coup-de-coeur" element={<CoupDeCoeur />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
