import React, { Component } from "react";
import { connect } from "react-redux";
import { calculate } from "./actions/actions";
import Calculator from "./calculator/calculator";

class App extends Component {
  onCalculate = (formulaStr) => {
    this.props.dispatch(calculate(formulaStr));
  };

  render() {
    return (
      <Calculator result={this.props.result} onCalculate={this.onCalculate} />
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state
  };
}

export default connect(mapStateToProps)(App);
