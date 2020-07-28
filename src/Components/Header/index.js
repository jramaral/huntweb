import React from "react";
import Logo from "../../assets/img/huntjs.png";
import "./styles.css";

export default function Header() {
  return (
    <header id="main-header">
      <img className="Logo" src={Logo} alt="Logo do App" />
    </header>
  );
}
