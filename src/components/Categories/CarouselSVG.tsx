import * as React from "react";
const CarouselSVG = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={15} fill="white" stroke="#D0D0D0" />
    <path d="M14 12L19 16.3333L14 20" stroke="black" strokeWidth={2} />
  </svg>
);
export default CarouselSVG;
