import React from "react";

import "../styles.css";

const OutputScreen = ({
  previousOperand = null,
  operation = null,
  currentOperand = null,
}) => {
  return (
    <div className="output">
      <div className="previous-operand">{previousOperand}</div>
      <div className="current-operand">{currentOperand}</div>
    </div>
  );
};

export default OutputScreen;
