/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconArrowTopRight2 = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-arrow-top-right-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.33334 11.7267L10.3933 4.66671H6.00001V3.33337H12.6667V10H11.3333V5.60671L4.27334 12.6667L3.33334 11.7267Z"
        fill={color}
      />
    </svg>
  );
};

IconArrowTopRight2.propTypes = {
  color: PropTypes.string,
};
