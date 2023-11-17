/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InterfaceEssentialFacebook = ({ color = "white", className }) => {
  return (
    <svg
      className={`interface-essential-facebook ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.8208 11.9181C21.8205 16.9329 18.0705 21.1554 13.0908 21.7481V15.0481H14.8508C15.0975 15.0494 15.3051 14.8635 15.3308 14.6181L15.5208 13.1681C15.534 13.0304 15.4907 12.8932 15.4008 12.7881C15.3088 12.6793 15.1733 12.617 15.0308 12.6181H13.0908V10.9181C13.0908 10.3658 13.5385 9.91809 14.0908 9.91809H15.0908C15.2198 9.92078 15.3445 9.87139 15.4367 9.78108C15.5289 9.69077 15.5808 9.56714 15.5808 9.43809V7.82809C15.5776 7.57759 15.3895 7.36813 15.1408 7.33809C15.1408 7.33809 14.4208 7.27809 13.5608 7.27809C11.4208 7.27809 10.2408 8.54809 10.2408 10.8581V12.6181H8.24081C7.97019 12.6181 7.75081 12.8375 7.75081 13.1081V14.5581C7.75081 14.8287 7.97019 15.0481 8.24081 15.0481H10.1808V21.6681C5.01228 20.7517 1.45482 15.9641 2.06884 10.751C2.68286 5.53794 7.25533 1.70791 12.4953 2.01751C17.7353 2.32712 21.825 6.66896 21.8208 11.9181Z"
        fill={color}
      />
    </svg>
  );
};

InterfaceEssentialFacebook.propTypes = {
  color: PropTypes.string,
};
