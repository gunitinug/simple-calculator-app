import React from "react";

const calculatorKeys = (props) => {
  return (
    <button onClick={() => props.onClick(props.calKey)}>{props.calKey}</button>
  );
};

export default calculatorKeys;
