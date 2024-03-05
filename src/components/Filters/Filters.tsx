import React from "react";
import "./Filters.css";
import FilterSVG from "./FilterSVG";

export default function Filters() {
  return (
    <div className="filters-container">
      <div className="filter-svg-container">
        <FilterSVG />
      </div>

      <div className="filter-text">Filters</div>
    </div>
  );
}
