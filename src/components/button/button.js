import React from "react";

const Button = function (props) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
