export default function calculator(state = 0, action) {
  if (action.type === "CALCULATE") {
    const { formulaStr } = action.payload;
    return eval(formulaStr);
  }

  return state;
}
