import React from "react";
import "./Taxes.css";
import TaxSVG from "./TaxSVG";

export default function Taxes() {
  return (
    <div className="taxes-container">
      <div className="tax-text">Before Taxes</div>
      <TaxSVG />
    </div>
  );
}
