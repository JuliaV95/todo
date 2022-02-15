import React from "react";

const Button = function (props) {
  return (
    <button  
      className={`btn ${props.isActive ? 'active' : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
