import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CoupDeCoeur from "./Pages/CoupDeCoeur";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/coup-de-coeur">Coup de Coeur</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coup-de-coeur" element={<CoupDeCoeur />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
