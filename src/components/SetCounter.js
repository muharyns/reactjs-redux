import { useSelector, useDispatch } from "react-redux";
import { INCREASE, DECREASE } from "../store/types/counter";

export const SetCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const setter = (indicator) => {
    if (indicator === "+") {
      // increase
      dispatch({ type: INCREASE, payload: counter.counter + 1 });
    } else if (indicator === "-") {
      dispatch({ type: DECREASE, payload: counter.counter - 1 });
      // decrease
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <button
        style={{ fontSize: "2rem", margin: "0.5rem" }}
        onClick={() => setter("-")}
      >
        DECREASE
      </button>
      <button
        style={{ fontSize: "2rem", margin: "0.5rem" }}
        onClick={() => setter("+")}
      >
        INCREASE
      </button>
    </div>
  );
};
