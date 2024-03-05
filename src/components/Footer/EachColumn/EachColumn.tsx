import React from "react";
import "./EachColumn.css";

type EachColumnPropType = {
  title: string;
  elements: string[];
};

export default function EachColumn(props: EachColumnPropType) {
  return (
    <div className="column-container">
      <div className="column-title">{props.title}</div>
      {props.elements.map((element) => (
        <p className="column-elements"> {element} </p>
      ))}
    </div>
  );
}
