import React from "react";

import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

import { backSpace, clear, evaluate } from "../redux/actions";
import useKeyPress from "../utils/useKeyPress";

import "../styles.css";

const InputSection = ({ dispatch }) => {
  useKeyPress(dispatch);

  return (
    <React.Fragment>
      <button className="span-two" onClick={() => dispatch(clear())}>
        AC
      </button>
      <button onClick={() => dispatch(backSpace())}>DEL</button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two equals" onClick={() => dispatch(evaluate())}>
        =
      </button>
    </React.Fragment>
  );
};

export default InputSection;
