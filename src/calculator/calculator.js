import React, { useState } from "react";
import CalculatorKeys from "./calculatorKeys";

// const calKeys = [...Array(10).keys(), "+", "-", "*", "/"];
const calKeys = [ 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '+' ];

const Calculator = (props) => {
  const [formulaStr, setFormulaStr] = useState("");

  const onEnd = () => {
    props.onCalculate(formulaStr);
  };

  const onClick = (k) => {
    setFormulaStr(formulaStr + k);
  };

  const onClear = () => {
    setFormulaStr("");
  };

  const myCalKeys = calKeys.map((k) => (
    <CalculatorKeys key={k} calKey={k} onClick={onClick} />
  ));

  return (
    <div>
      <input type="text" value={props.result} />
      <input type="text" value={formulaStr} />
      {myCalKeys}
      <button onClick={onClear}>C</button>
      <button onClick={onEnd}>=</button>
    </div>
  );
};

export default Calculator;
