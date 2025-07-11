import React from "react";

const Button = ({ className = "", onClick,  children, ...props }) => (
  <button
    {...props}
    className={`focus:outline-none focus:ring ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
