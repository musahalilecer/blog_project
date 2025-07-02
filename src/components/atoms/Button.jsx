import React from "react";

const Button = ({ className = "", children, ...props }) => (
  <button
    {...props}
    className={`focus:outline-none focus:ring ${className}`}
  >
    {children}
  </button>
);

export default Button;
