import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={24}
    height={22}
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 1C3.46244 1 1 3.43781 1 6.445C1 8.8727 1.96213 14.6342 11.4363 20.4593C11.7793 20.6703 12.2207 20.6703 12.5638 20.4593C22.0378 14.6342 23 8.8727 23 6.445C23 3.43781 20.5375 1 17.5 1C14.4625 1 12 4.3 12 4.3C12 4.3 9.53756 1 6.5 1Z"
      fill="#848282"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
