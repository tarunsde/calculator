import { useReducer } from "react";

import InputSection from "./components/InputSection";
import OutputScreen from "./components/OutputScreen";

import { calculatorReducer } from "./redux/calculatorReducer";

import "./styles.css";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calculatorReducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <OutputScreen
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
      />
      <InputSection dispatch={dispatch} />
    </div>
  );
}

export default App;
