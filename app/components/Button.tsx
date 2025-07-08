import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", ariaLabel }) => (
  <button
    className={`bg-gradient-to-br from-purple-700 to-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
    type="button"
  >
    {children}
  </button>
);
