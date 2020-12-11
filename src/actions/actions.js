export function calculate(formulaStr) {
  return {
    type: "CALCULATE",
    payload: {
      formulaStr
    }
  };
}
