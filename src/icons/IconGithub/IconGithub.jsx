/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconGithub = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-github ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12 2.24669C6.475 2.24669 2 6.72169 2 12.2467C2 16.6717 4.8625 20.4092 8.8375 21.7342C9.3375 21.8217 9.525 21.5217 9.525 21.2592C9.525 21.0217 9.5125 20.2342 9.5125 19.3967C7 19.8592 6.35 18.7842 6.15 18.2217C6.0375 17.9342 5.55 17.0467 5.125 16.8092C4.775 16.6217 4.275 16.1592 5.1125 16.1467C5.9 16.1342 6.4625 16.8717 6.65 17.1717C7.55 18.6842 8.9875 18.2592 9.5625 17.9967C9.65 17.3467 9.9125 16.9092 10.2 16.6592C7.975 16.4092 5.65 15.5467 5.65 11.7217C5.65 10.6342 6.0375 9.73419 6.675 9.03419C6.575 8.78419 6.225 7.75919 6.775 6.38419C6.775 6.38419 7.6125 6.12169 9.525 7.40919C10.325 7.18419 11.175 7.07169 12.025 7.07169C12.875 7.07169 13.725 7.18419 14.525 7.40919C16.4375 6.10919 17.275 6.38419 17.275 6.38419C17.825 7.75919 17.475 8.78419 17.375 9.03419C18.0125 9.73419 18.4 10.6217 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.2 16.9717 14.5125 17.5717 14.5125 18.5092C14.5125 19.8467 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.1727 21.064 18.8977 19.7882 20.1198 18.0862C21.3419 16.3843 21.9995 14.3419 22 12.2467C22 6.72169 17.525 2.24669 12 2.24669Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconGithub.propTypes = {
  color: PropTypes.string,
};