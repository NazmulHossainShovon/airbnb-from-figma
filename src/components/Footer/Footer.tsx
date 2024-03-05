import React from "react";
import "./Footer.css";
import Columns from "./Columns/Columns";
import Kicker from "../Kicker/Kicker";

export default function Footer() {
  return (
    <div className="footer-container">
      <Columns />
      <Kicker />
    </div>
  );
}
