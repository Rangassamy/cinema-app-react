import React from "react";
import { NavLink } from "react-router-dom"; // Utilisé pour la navigation avec des liens actifs
import "../styles/index.scss";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              {({ isActive }) => (
                <a className={isActive ? "nav-active" : ""}>Home</a>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/coup-de-coeur" activeClassName="nav-active">
              {({ isActive }) => (
                <a className={isActive ? "nav-active" : ""}>Coup de Coeur</a>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </header>
  );
}

export default Header;
