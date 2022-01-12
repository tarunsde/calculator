import { enterDigit } from "../redux/actions";

export default function DigitButton({ dispatch, digit }) {
  return <button onClick={() => dispatch(enterDigit(digit))}>{digit}</button>;
}
