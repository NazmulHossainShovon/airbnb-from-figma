import React from "react";
import "./EachCategory.css";

type CategoryPropType = {
  Icon: (props: any) => JSX.Element;
  name: string;
};

export default function EachCategory(props: CategoryPropType) {
  return (
    <div className="category-container">
      {props.Icon}
      <div className="category-name">{props.name}</div>
    </div>
  );
}
