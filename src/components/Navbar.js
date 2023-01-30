import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-links">
      <a href="#!">Home</a> {">"} <a href="#!">Sách Tiếng Việt</a>{">"} <a href="#!">Tâm lý</a>
    </nav>
  );
};

export default Navbar;
