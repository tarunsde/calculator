export const ACTIONS = {
  ENTER_DIGIT: "enter-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

export const enterDigit = (digit) => ({
  type: ACTIONS.ENTER_DIGIT,
  payload: { digit },
});

export const chooseOperation = (operation) => ({
  type: ACTIONS.CHOOSE_OPERATION,
  payload: { operation },
});

export const evaluate = () => ({ type: ACTIONS.EVALUATE });

export const clear = () => ({ type: ACTIONS.CLEAR });

export const backSpace = () => ({ type: ACTIONS.DELETE_DIGIT });
