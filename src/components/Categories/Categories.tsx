import React from "react";
import "./Categories.css";
import CategorySVG from "./EachCategory/CategorySVG";
import EachCategory from "./EachCategory/EachCategory";
import CarouselSVG from "./CarouselSVG";

const categoriesData = [
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
  { Icon: <CategorySVG />, name: "Cabins" },
];

export default function Categories() {
  return (
    <div className="categories-container">
      {categoriesData.map((category) => (
        <EachCategory Icon={category.Icon} name={category.name} />
      ))}
      <CarouselSVG />
    </div>
  );
}
