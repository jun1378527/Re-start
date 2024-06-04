import React from "react";
import "./Sidebar.css";

function Sidebar({ isVisible }) {
  return (
    <aside className={`App-sidebar ${isVisible ? "visible" : ""}`}>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
