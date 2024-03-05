import * as React from "react";
const DotSVG = (props) => (
  <svg
    width={2}
    height={2}
    viewBox="0 0 2 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={1} cy={1} r={1} fill="#4B5563" />
  </svg>
);
export default DotSVG;
