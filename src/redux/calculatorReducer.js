import { ACTIONS } from "./actions";
import { evaluate } from "../utils/evaluate";

export function calculatorReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ENTER_DIGIT: {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    }
    case ACTIONS.CHOOSE_OPERATION: {
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
        };
      }

      if (state.overwrite) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: `${state.currentOperand} ${payload.operation}`,
          currentResult: state.currentOperand,
          currentOperand: null,
          overwrite: false,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: `${state.currentOperand} ${payload.operation}`,
          currentResult: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: `${state.previousOperand} ${state.currentOperand} ${payload.operation}`,
        operation: payload.operation,
        currentResult: evaluate(state),
        currentOperand: null,
      };
    }
    case ACTIONS.CLEAR: {
      return {};
    }
    case ACTIONS.DELETE_DIGIT: {
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
          previousOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    }
    case ACTIONS.EVALUATE: {
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: `${state.previousOperand} ${state.currentOperand}`,
        operation: null,
        currentOperand: evaluate(state),
      };
    }
    default: {
      return { ...state };
    }
  }
}
