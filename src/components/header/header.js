import React from "react";

const Header = ({tasksAmount, tasksRemain}) => {
  return (
    <header className="header">
      <h1>{tasksAmount} Tasks</h1>
      <h2>{tasksRemain} Remain</h2>
    </header>
  );
};
export default Header;
