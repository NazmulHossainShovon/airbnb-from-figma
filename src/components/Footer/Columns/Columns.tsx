import React from "react";
import "./Columns.css";
import EachColumn from "../EachColumn/EachColumn";

const columnData = [
  {
    id: 1,
    title: "Support",
    elements: ["Help Center", "Help Center", "Help Center", "Help Center"],
  },
  {
    id: 2,
    title: "Support",
    elements: ["Help Center", "Help Center", "Help Center", "Help Center"],
  },
  {
    id: 3,
    title: "Support",
    elements: ["Help Center", "Help Center", "Help Center", "Help Center"],
  },
  {
    id: 4,
    title: "Support",
    elements: ["Help Center", "Help Center", "Help Center", "Help Center"],
  },
];

export default function Columns() {
  return (
    <div className="columns-container">
      {columnData.map((data) => (
        <EachColumn key={data.id} title={data.title} elements={data.elements} />
      ))}
    </div>
  );
}
