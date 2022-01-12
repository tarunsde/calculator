import { useEffect } from "react";

import {
  backSpace,
  chooseOperation,
  clear,
  enterDigit,
  evaluate,
} from "../redux/actions";
import { OPERATORS } from "./constants";

const useKeyPress = (dispatch) => {
  const handleKeyPress = (e) => {
    if (isFinite(e.key) || "." === e.key) {
      dispatch(enterDigit(e.key));
    } else if (OPERATORS.includes(e.key)) {
      dispatch(chooseOperation(e.key));
    } else if (e.key === "Enter") {
      dispatch(evaluate());
    } else if (e.key === "Delete") {
      dispatch(clear());
    } else if (e.key === "Backspace") {
      dispatch(backSpace());
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);
    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, []);
};

export default useKeyPress;
