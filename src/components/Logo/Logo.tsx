import React from "react";
import "./Logo.css";
import LogoSVG from "./LogoSVG";

export default function Logo() {
  return (
    <div className="logo-container">
      <LogoSVG />

      <h1 className="logo-text">airbnb</h1>
    </div>
  );
}
